import { createLabel, getAftershipRates } from "../aftershipService";
import { CreateLabelPayload, GetAftershipRatesType, LabelPayloadType } from "../interfaces";

export const getRates = async (shipment: GetAftershipRatesType) => {
  try {
    const rates = await getAftershipRates(shipment)

    const parsedRates = rates.map(rate => {
        return {
          ServiceName: rate.service_name,
          charges: {
            weight: rate.charge_weight,
            perUnit: {
              orignal: rate.total_charge.amount,
              data: rate.total_charge.amount * 1.1,
              currency: rate.total_charge.currency
            }
          }
        }
    });

    return parsedRates;
  } catch (error) {
    console.log((error as any).message);
    return []
  }
};

export const createLabelforShipment = async (payload: LabelPayloadType) => {
  try {
    const label = await createLabel(payload)

    return label;
  } catch (error) {
    console.log((error as any).message);
    return []
  }
};
