export interface ProductCardProps {
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface ProductData {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
  }