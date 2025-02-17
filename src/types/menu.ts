export interface MenuItem {
  id: string;
  name: string;
  type: string;
  image: string;
  price: {
    base: number;
    supplements: { name: string; price: number; }[];
  };
  category: string;
  description: string;
} 