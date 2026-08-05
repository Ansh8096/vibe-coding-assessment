export interface Product {
  id: number;
  name: string;
  category: "Electronics" | "Apparel" | "Footwear";
  price: number;
  rating: number;
  image: string;
}