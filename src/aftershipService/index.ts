import axios from 'axios';
import { GetRatesResponseType, Rate } from '../interfaces';

const axiosClient = axios.create({
  baseURL:  process.env.AFTER_SHIP_ENDPOINT ||  'https://sandbox-api.aftership.com/postmen/v3',
  headers: {
    'Content-Type': 'application/json',
    'as-api-key': process.env.AFTER_SHIP_API_KEY || 'asat_9ed49ad08a38424ba8cca09266355738',
  },
});

export const getAftershipRates = async (): Promise<Rate[]> => {
  try {
    const res  = await axios.get('https://sandbox-api.aftership.com/postmen/v3/rates', {
      headers: {
        'Content-Type': 'application/json',
        'as-api-key': process.env.AFTER_SHIP_API_KEY
      }
    })
    console.log(res)
    return []
    // const { rates } = ratesData || {}
    // console.log('0', rates.length, ratesData.created_at_max)
    // return rates;
  } catch (error) {
    console.log(error)
    return []
  }
}