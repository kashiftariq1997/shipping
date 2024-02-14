import { getRates as getServiceRates } from './shipping.service';

export const getRates = async (req: any, res: any) => {
  try {
    const rates = await getServiceRates();
    res.json(rates);
  } catch (error) {
    res.status(500).send("Failed");
  }
};
