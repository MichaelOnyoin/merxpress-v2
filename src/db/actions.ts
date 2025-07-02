"use server";
import { neon } from "@neondatabase/serverless";
import { Product } from './definitions';
import { Order } from './definitions';
//import { getUserDetails } from '@/app/actions';
//import { stackServerApp } from '@/stack';
//import { CartItem } from "./definitions";
//import axios from "axios";
import { toast } from 'sonner';

const db_key =process.env.DATABASE_URL;
// const user = await stackServerApp.getUser();
// const userProfile = await getUserDetails(user?.id);

export async function validateLogin(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ email, password }),

    });
    console.log(JSON.stringify({ email, password }));
    console.log(response);
    // Check if the response is ok (status in the range 200-299)
    if(response.ok){
    //console.log("Login successful");
    // Assuming the response contains a token and user information
    const data = await response.json();
    console.log("Login response: ", data);
    
    

    // Show a success toast notification
    // toast.success("Login successful! Welcome back, " +data.name , {
    //   duration: 3000, // Duration in milliseconds
    //   position: "top-right", // Position of the toast
    //   style: {
    //     backgroundColor: "#4CAF50", // Green background for success
    //     color: "#fff", // White text color
    //   },
    // });
    return data;
    }

    if (!response.ok) {
      // Handle non-2xx HTTP responses
      const errorData = await response.json();
      toast.error("Login failed: Wrong email or password");
      throw new Error(errorData.message || "Login failed");
      
    }

    // Parse and return the response data (e.g., token, user info)
    //return await response.json();
    
  } catch (error) {
    // Handle network or parsing errors
    throw error;
  }
}

export async function logout() {
  //'use server'
  try {
    const response = await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }
    // Optionally, you can clear user session or local storage
    // For example, if you're using local storage:
     localStorage.removeItem('user');
    // Optionally, you can redirect or update the UI after logout
   console.log('Logout successful');
  } catch (error) {
    console.error('Logout error:', error);
  }
}

export async function getData() {
    
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    const sql = neon(db_key||'');

    const data = await sql`SELECT * FROM products`;
    console.log('Fetching product data...');
    return data as Product[];
}



export async function getOrder() {
    //const db_key =process.env.DATABASE_URL;
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    //const sql = neon(db_key||'');
    //const data = await sql('SELECT * FROM orders WHERE id = $1', [id]);
    //const data = await sql`SELECT * FROM orders WHERE id = ${userProfile?.id}`;
    console.log('Fetching your placed order data...');
   // return data as Order[];
}

//Insert data into the orders table that contains a column for total and items. The total is the total price of the items in the cart and the items is an array of the items in the cart. The items array is a JSON object that contains the id, title, price, and quantity of each item in the cart. The total price of the items in the cart is calculated by multiplying the price of each item by the quantity of that item and summing the results. The items array is created by mapping over the items in the cart and creating a new object for each item that contains the id, title, price, and quantity of that item. The items array is then passed to the INSERT INTO query as a parameter. The total price of the items in the cart is also passed to the INSERT INTO query as a parameter. The total price and items array are then inserted into the orders table in the database.
//javascript

// export async function setOrder(total:number, cartItems:any) {
   
    
//     if (!process.env.DATABASE_URL) {
//         throw new Error("DATABASE_URL is not defined");
//     }
    //const sql = neon(db_key||'');
    // const items = cartItems.map((item: any) => {
    //     return {
    //         id: item.id,
    //         title: item.title,
    //         price: item.price,
    //         quantity: item.quantity
    //     }

    // });
    //await sql`INSERT INTO orders (total, items, user_id) VALUES (${total}, ${JSON.stringify(cartItems)}, ${userProfile?.id})`;
    
    //await sql('INSERT INTO orders (total, items, user_id) VALUES ($1, $2 , $3)', [total, JSON.stringify(items), userProfile?.id]);
      
//     console.log('inserting into order data...');
    
// }

export async function getOrders() {
    const sql = neon(db_key||'');
    try {
        const data = await sql`SELECT * FROM orders`;
        console.log('Fetching orders...');
        return data as Order[];
      
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};
