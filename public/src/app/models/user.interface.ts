export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  dob: Date;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: string;
}
