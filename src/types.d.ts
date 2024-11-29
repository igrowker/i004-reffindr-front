export interface User {
  id: string
  name: string
  surname: string
  email: string
}

export interface Property {
  id: number
  countryId: number
  stateId: number
  title: string
  address: string
  countryName: string
  stateName: string
  price: number
  environments: number
  bathrooms: number
  bedrooms: number
  seniority: number
  water: boolean
  gas: boolean
  surveillance: boolean
  electricity: boolean
  internet: boolean
  pool: boolean
  garage: boolean
  pets: boolean
  grill: boolean
  elevator: boolean
  terrace: boolean
  description: string
}

export interface IBaseResponse<T> {
  data?: T
  errors: string[]
  hasErrors: boolean
  statusCode: number
}
