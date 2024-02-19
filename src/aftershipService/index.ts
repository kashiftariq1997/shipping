import axios from 'axios';
import {
  CreateLabelPayload, CreateLabelResponse, GetAftershipRatesPayloadType, GetAftershipRatesType,
  GetRatesResponseType, LabelPayloadType, Rate2
} from '../interfaces';

const axiosClient = axios.create({
  baseURL:  process.env.AFTER_SHIP_ENDPOINT ||  'https://sandbox-api.aftership.com/postmen/v3',
  headers: {
    'Content-Type': 'application/json',
    'as-api-key': process.env.AFTER_SHIP_API_KEY || 'asat_9ed49ad08a38424ba8cca09266355738',
  },
});

export const getAftershipRates = async (inputs: GetAftershipRatesType): Promise<Rate2[]> => {
  const { from, parcels, to, returnTo } = inputs

  const getRatesBody: GetAftershipRatesPayloadType = {
    shipper_accounts: [
      {
        id: "6f43fe77-b056-45c3-bce4-9fec4040da0c"
      }
    ],
    shipment: {
      ship_from: from,
      ship_to: to,
      parcels,
      ...(returnTo?.contact_name ? { return_to: returnTo } : null ),
      delivery_instructions: "handle with care"
    }
  }

  try {
    const { data }  = await axiosClient.post<GetRatesResponseType>('/rates', JSON.stringify(getRatesBody) )
    const { data: rateData } = data || {}

    return rateData.rates;
  } catch (error) {
    console.log("*********** Error in getAftershipRates ***********")
    console.log(error)
    return []
  }
}

export const createLabel = async (inputs: LabelPayloadType): Promise<any> => {
  const {
    from, is_document, paper_size, parcels, return_shipment, service_type, to
  } = inputs

  const body: CreateLabelPayload = {
    return_shipment,
    is_document,
    service_type,
    paper_size,
    shipper_account: {
      id: "3ba41ff5-59a7-4ff0-8333-64a4375c7f21"
    },
    references: [
      "refernce1"
    ],
    shipment: {
      ship_from: from,
      ship_to: to,
      parcels: parcels
    },
    custom_fields: {
      ship_code: "01"
    }
  }

  try {
    const { data }  = await axiosClient.post<CreateLabelResponse>('/labels', JSON.stringify(body) )
    const { data: createLabelData } = data
    return createLabelData;
  } catch (error) {
    console.log("*********** Error in getAftershipRates ***********")
    console.log(error)
    return []
  }
}
