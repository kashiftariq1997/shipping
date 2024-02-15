import { getAftershipRates } from "../aftershipService";
import { GetAftershipRatesType } from "../interfaces";

export const getRates = async (shipment: GetAftershipRatesType) => {
  try {
    const rates = await getAftershipRates(shipment)

    const parsedRates = rates.map(rate => {
      console.log(rate, "rate")
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
