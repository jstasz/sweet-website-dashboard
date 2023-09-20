export type Order = {
  email: string;
  date: string;
  status: string;
  order: OrderItem[];
};

type OrderItem = {
  category: string;
  description: string;
  id: number;
  imagePath: string;
  name: string;
  price: number;
  quantity: number;
};