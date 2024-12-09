export interface RequirementPostRequestDto {

  IsWorking: boolean
  HasWarranty: boolean
  RangeSalary: number

}
export interface Property {
  id: number;
  requirementId: number;
  countryName: string;
  stateName: string;
  title: string;
  address: string;
  environments: number;
  bathrooms: number;
  bedrooms: number;
  seniority: number;
  water: boolean;
  gas: boolean;
  surveillance: boolean;
  electricity: boolean;
  internet: boolean;
  pool: boolean;
  garage: boolean;
  pets: boolean;
  grill: boolean;
  elevator: boolean;
  terrace: boolean;
  description: string;
  price: number;
  images: string[];
  requirementPostRequestDto: {
    isWorking: boolean;
    hasWarranty: boolean;
    rangeSalary: number;
  };
}
