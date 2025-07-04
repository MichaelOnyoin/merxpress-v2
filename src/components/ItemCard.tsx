'use client'
import * as React from "react";
import { Heart, CirclePlus } from "lucide-react";
import { ProductCardProps } from "@/db/definitions";
import { useCart } from "@/components/cart/CartContext";
import CustomAlert from "./CustomAlert";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
  } from '@/components/ui/tooltip'
import { toast } from 'sonner';

interface ProductProps {
    //product: CartItem;
      product: ProductCardProps;
  }


export const ItemCard=({product}:ProductProps)=>{
    const [likeCount, setLikeCount] = React.useState(0); // State to hold the like count
    const [showAlert, setShowAlert] = React.useState(false); // State to control alert visibility

    const { dispatch } = useCart();
        
          const addToCart = () => {
            dispatch({
              type: "ADD_ITEM",
              payload: { ...product, quantity: 1 },
            });
            toast.success('Item added to cart',{position:'top-right',duration:2000,style:{backgroundColor:'white',color:'green',border:'2px solid white',borderRadius:'10px', boxShadow:'0 0 5px '}});
          };

    function handleLike() {
        setLikeCount(prevLikeCount => prevLikeCount + 1); // Increment the like count
        setShowAlert(true); // Show the alert
        //alert(`Liked this! Total likes: ${likeCount + 1}`); // Show the updated count
        //make the alert message appear for only 2 seconds ?
    }
    
    

    
    return(
       
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col mr-4 relative hover:shadow-lg hover:translate-y-[-2%] transition-transform duration-300 ease-in-out" >
                {showAlert && (
                <CustomAlert
                    message={`Liked this! Total likes: ${likeCount}`}
                    duration={2000}
                    onClose={() => setShowAlert(false)}
                />
                )}
                    <img 
                    src={product.imageUrl}
                    alt={product.title} 
                    className="w-full min-w-62 object-contain mb-4"/>
                    <Heart className=' h-5 stroke-red-400 absolute top-4 mr-2 right-0 hover:fill-red-500' strokeWidth={1.0} fill='none' href='null' role="button" onClick={handleLike}/>
                    {/* {product.liked ? (
                        <span className="absolute top-4 right-0 text-red-500 font-bold">{likeCount}</span>
                    ) : (
                        <span className="absolute top-4 right-0 text-gray-500 font-bold">{likeCount}</span>
                    )} */}
                    {product.deals ? (
                        <span className="bg-red-500 text-zinc-100 h-6 w-fit px-1 absolute top left-4 rounded-sm">{product.deals}</span>
                    ) : (
                        <span className="">{null}</span>
                    )}
                    
                    <div className="flex justify-between items-center mb-0">
                    {product.discount ? (
                        <div className="relative ">
                            
                            <span className="text-red-500 text-xl font-bold">${product.price}</span>
                            <span className="text-gray-500 line-through">${product.originalPrice?.toFixed(2)}</span>
                            <span className="text-red-500 whitespace-nowrap">-{product.discount}%</span>
                            
                            
                        </div>
                    ) : (
                        <div className="gap-2.5 self-start text-xl whitespace-nowrap">
                        ${product.price}
                        </div>
                    )}
                    </div>
                    
                    <h2 className="text-lg  mb-2 text-slate-900">{product.title}</h2>
                    <p className="text-gray-500 leading-7">{product.description}</p>
                    <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {/* <button className="bg-green-500 text-white p-2 rounded-lg mt-4">Add to Cart</button> */}
                            <CirclePlus className=' h-6 stroke-gray-800 mr-2 absolute bottom-4 right-0 hover:fill-green-700 hover:stroke-white' strokeWidth={1.0} fill='none' href='null' role="button"
                                onClick={addToCart}
                                />
                        </TooltipTrigger>
                        <TooltipContent sideOffset={5} className="transform -translate-x-1/2 bg-gray-500/90 text-white p-4 rounded shadow-sm opacity-100 p-2 rounded-lg primary">
                            Add this item to your cart
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
            </div>
        

    )
}

