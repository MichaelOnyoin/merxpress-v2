//import { type } from 'os';

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Product = {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
    //liked?:boolean;
  };

export interface ProductCardProps {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
    //liked?:boolean;
  }

export interface DataCardProps{
  title: string; // title of product
  category: string; // category of product
  price: number; // price of product in INR
  imgs?:  string ; // array of images of product
  specs?: [string, string]; // Array or String of specs of product -> If Array, then render as list else if String, then render as single line
  inStock: number; // quantity in stock of product -> If 0, then hide from the store, or less than 10, then show a "Very few left" or play with this value
  eta: number; // estimated time of arrival of product in mins
  id: number; 
}
  
export interface ProductData {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
    //liked?:boolean;
  }
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };
  
  export type Cart = {
    items: CartItem[];
  };
  
  export type Order = {
    id: string;
    total: number;
    //status: "pending" | "completed";
    status: string;
    items: CartItem[];
    user_id?: string;
  };
  
  export type OrderHistory = {
    orders: Order[];
  };
  
  export type State = {
    user: User | null;
    cart: Cart;
    orderHistory: OrderHistory;
  };
  
  export const initialState: State = {
    user: null,
    cart: {
      items: [],
    },
    orderHistory: {
      orders: [],
    },
  };
  
  export type Action =
    | { type: "login"; user: User }
    | { type: "logout" }
    | { type: "addToCart"; product: Product }
    | { type: "removeFromCart"; product: Product }
    | { type: "checkout" }
    | { type: "clearCart" }
    | { type: "placeOrder"; order: Order };
  
  export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.user,
        };
      case "logout":
        return {
          ...state,
          user: null,
        };
      case "addToCart":
        return {
          ...state,
          cart: {
            items: [
              ...state.cart.items,
              {
                product: action.product,
                quantity: 1,
              },
            ],
          },
        };
      case "removeFromCart":
        return {
          ...state,
          cart: {
            items: state.cart.items.filter(
              (item) => item.product.id !== action.product.id
            ),
          },
        };
      case "checkout":
        return {
          ...state,
          orderHistory: {
            orders: [
              ...state.orderHistory.orders,
              {
                id: Math.random().toString(36).substr(2, 9),
                items: state.cart.items,
                total: state.cart.items.reduce(
                  (total, item) => total + item.product.price * item.quantity,
                    0 
                ),
                status: "pending",
                },
                ],
                },
                cart: {
                items: [],
                },
                };
                case "clearCart":
                return {
                ...state,
                cart: {
                items: [],
                },
                };
                case "placeOrder":
                  return {
                    ...state,
                    orderHistory: {
                      orders: [...state.orderHistory.orders, action.order],
                    },
                    cart: {
                      items: [],
                    },
                  };
                default:
                  return state;
              }
            }


export type SessionPayload = {
  sessionId?: string;
  userId: string;
  ip_address?: string;
  payload?: string;
  last_activity?: Date;
  expiresAt: Date;
};