
export interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  email: string;
  password: string;
  isSeller: boolean;
}
