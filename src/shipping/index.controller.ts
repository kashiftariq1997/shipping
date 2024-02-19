import { Request, Response } from 'express';
import { GetAftershipRatesType, LabelPayloadType } from '../interfaces';
import { getRates as getServiceRates,  createLabelforShipment} from './shipping.service';

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

export const createLabel = async (req: Request, res: Response) => {
  try {
    const labelDetails = req.body as LabelPayloadType;

    if (!labelDetails.from || !labelDetails.to || !labelDetails.parcels || !labelDetails.service_type) {
      return res.status(400).send("Shipment details are incomplete.");
    }

    const rates = await createLabelforShipment(labelDetails);

    res.json(rates);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to get rates");
  }
}
