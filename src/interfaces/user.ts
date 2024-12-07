export interface User {
  roleId: number
  countryId: null
  stateId: null
  name: string
  lastName: string
  dni: string
  phone: string
  address: string
  birthDate: string
  email: string
  isProfileComplete: boolean
  imageProfileUrl: string
}

export interface EditUserRequest {
  email: string;
  name: string; 
  lastName: string;
  dni: string;
  phone: string;
  address: string;
  birthDate: string;
  profileImage: File | null;
  profileImageUrl: string | null;

}