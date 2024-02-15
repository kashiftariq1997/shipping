export interface GetRatesResponseType {
  meta: Meta
  data: Rate
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

// export interface ShipperAccount {
//   id: string
//   slug: string
//   description: string
// }

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

export interface ShipperAccount {
  id: string
}

export type ShipAddress = {
  street1: string
  country: string
  contact_name: string
  company_name?: string
  city?: string
  state?: string
  postal_code?: string
  phone?: string
  email?: string
}

export type ReturnTo = ShipAddress  & {
  street2?: string
  type?: string
}

export type Parcel = {
  box_type: string
  dimension: Dimension
  items: Item[]
  description: string
  weight: Weight
}

export type Dimension = {
  width: number
  height: number
  depth: number
  unit: string
}

export type Item = {
  weight: Weight
  description: string
  quantity: number
  price?: Price
  item_id?: string
  origin_country?: string
  sku?: string
  hs_code?: string
}

export type Price = {
  currency: string
  amount: number
}

export type Weight = {
  unit: string
  value: number
}


export type GetAftershipRatesType = {
  from: ShipAddress;
  to: ShipAddress;
  parcels: Parcel[];
  returnTo?: ReturnTo;
}

export type Shipment = {
  ship_from: ShipAddress
  ship_to: ShipAddress
  parcels: Parcel[]
  return_to?: ReturnTo
  delivery_instructions: string
}

export type GetAftershipRatesPayloadType = {
  shipment: Shipment,
  shipper_accounts?: ShipperAccount[]
}