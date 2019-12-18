export interface Achievement {
  category: string;
  title: string;
  description: string;
  date: Date;
  unit_of_time: string;
  length_of_time: number;
  image_url?: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
