import { getAftershipRates } from "../aftershipService";

export const getRates = async () => {
  try {
    console.log("1")
    const rates = await getAftershipRates()
    console.log("2")

    const parsedRates = rates.map(rate => {
      const {  rates: ratesData } = rate

      console.log(ratesData.length, "Length of rates")
      return ratesData.map(data => {
        console.log(data.service_name, ":L:L:")
        return {
          ServiceName: data.service_name,
          charges: {
            weight: data.charge_weight,
            perUnit: {
              data: data.total_charge.amount * 1.1, // Adding 10% to the total charge
              currency: data.total_charge.currency
            }
          }
        };
      })
    });

    return parsedRates;
  } catch (error) {
    console.log((error as any).message);
    return []
  }

};
