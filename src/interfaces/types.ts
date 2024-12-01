export interface User {
  id: string
  name: string
  surname: string
  email: string
}


export interface Property {
  id:                        string;
  countryId:                 number;
  stateId:                   number;
  title:                     string;
  address:                   string;
  environments:              number;
  bathrooms:                 number;
  bedrooms:                  number;
  seniority:                 number;
  water:                     boolean;
  gas:                       boolean;
  surveillance:              boolean;
  electricity:               boolean;
  internet:                  boolean;
  pool:                      boolean;
  garage:                    boolean;
  pets:                      boolean;
  grill:                     boolean;
  elevator:                  boolean;
  terrace:                   boolean;
  description:               string;
  requirementPostRequestDto: RequirementPostRequestDto;
}

export interface RequirementPostRequestDto {
  isWorking:   boolean;
  hasWarranty: boolean;
  rangeSalary: number;
}
