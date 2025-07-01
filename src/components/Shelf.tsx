'use client'

import { useEffect, useState } from "react";
import { ItemCard } from "@/components/ItemCard";
import { Product } from "@/db/definitions";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col mt-4 w-full">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 max-md:max-w-full ">Products from laravel backend</h2>
      <div className="flex flex-col mt-2 ">
        <div className="flex flex-row mb-4">
        {products.slice(0, 4).map((product:Product) => (
          
          <ItemCard key={product.id} product={product}  />
        ))}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex flex-row mb-4">
        {products.slice(4).map((product:Product) => (

          <ItemCard key={product.id} product={product}  />
        ))}
        </div>
      </div>
      {/* <div className="flex flex-col mt-2">
        <div className="flex flex-row mb-4">
        {products.slice(9).map((product:Product) => (

          <ItemCard key={product.id} product={product}  />
        ))}
        </div>
      </div> */}
    </div>
  );
};

export default Products;