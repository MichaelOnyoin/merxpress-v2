'use client'
import React from "react";
//import { Input } from "@/components/ui/input";
import { Search, Mic } from "lucide-react";
import axios from "axios";
import { Product } from "@/db/definitions";
//import { searchProducts } from "@/db/actions";

export function SearchBar({
  className,
}: {
  className?: string;
}) {
  const [query, setQuery] = React.useState("")||null;
  const [results, setResults] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
        const backendUrl = `http://localhost:8000/api/products/search?query=${query}`;
        
        const res = await axios.get(backendUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setResults(res.data);
        console.log("Search results:", res.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
  };

  return (
    <form className={className + " relative group"} onSubmit={handleSearch}>
        <Mic className='absolute left-3 top-2.5 text-gray-400 cursor-pointer' size={20} strokeWidth={1.5} fill='none' />
      <input
        type="text"
        placeholder="Search for products..."
        style={{ width: "400px" }}
        className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white flex-stretch focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">
        <Search
          size={20}
          className='absolute right-3 top-2.5 text-gray-400 cursor-pointer'
          strokeWidth={1.5}
          fill='none'
          role="submit"
        />
      </button>
      {/* Optionally display results */}
      {loading && <div className="text-zinc-100 mt-2">Searching...</div>}
      {results.length > 0 && (
        <ul className="absolute bg-white text-black mt-2 w-full hidden group-hover:block rounded shadow-lg z-10 h-80">
          {results.map((product:Product, idx) => (
            <li key={idx} className="p-2 text-red-500 hover:bg-gray-200 cursor-pointer">
              <img src={product.imageUrl} alt={product.title} className="w-20 h-20 rounded-lg mr-2 inline-block" />
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}