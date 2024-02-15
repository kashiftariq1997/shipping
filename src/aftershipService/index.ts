import axios from 'axios';
import { GetAftershipRatesPayloadType, GetAftershipRatesType, GetRatesResponseType, Rate2 } from '../interfaces';

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