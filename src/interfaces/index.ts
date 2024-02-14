export interface GetRatesResponseType {
  meta: Meta
  data: Data
}

export interface Meta {
  code: number
  message: string
  details: any[]
}

export interface Data {
  next_token: any
  limit: number
  created_at_min: string
  created_at_max: string
  rates: Rate[]
}

export interface Rate {
  created_at: string
  id: string
  updated_at: string
  service_options: any
  status: string
  rates: Rate2[]
}

export interface Rate2 {
  shipper_account: ShipperAccount
  service_type: string
  service_name: string
  pickup_deadline: any
  booking_cut_off: any
  delivery_date: string
  transit_time: number
  error_message: any
  info_message: any
  charge_weight: ChargeWeight
  total_charge: TotalCharge
  detailed_charges: DetailedCharge[]
}

export interface ShipperAccount {
  id: string
  slug: string
  description: string
}

export interface ChargeWeight {
  value: number
  unit: string
}

export interface TotalCharge {
  amount: number
  currency: string
}

export interface DetailedCharge {
  type: string
  charge: Charge
}

export interface Charge {
  amount: number
  currency: string
}
