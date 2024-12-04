export interface RequirementPostRequestDto {
  isWorking: boolean
  hasWarranty: boolean
  rangeSalary: number
}
export interface Property {
  id: number
  requirementId: number
  countryId: number
  stateId: number
  title: string
  address: string
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
  images: string[]
  requirementPostRequestDto: {
    isWorking: boolean
    hasWarranty: boolean
    rangeSalary: number
  }
}
