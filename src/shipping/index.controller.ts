import { Request, Response } from 'express';
import { GetAftershipRatesType } from '../interfaces';
import { getRates as getServiceRates } from './shipping.service';

export const getRates = async (req: Request, res: Response) => {
  try {
    const shipmentDetails = req.body as GetAftershipRatesType;

    if (!shipmentDetails.from || !shipmentDetails.to || !shipmentDetails.parcels) {
      return res.status(400).send("Shipment details are incomplete.");
    }

    const rates = await getServiceRates(shipmentDetails);

    res.json(rates);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to get rates");
  }
}
