import React from "react";
import { ProductGallery } from "@/components/gallery/ProductGallery";
import { MerxLayout } from "@/components/merxDash";
import { Items } from "@/components/Items";
import { ItemDisplay } from "@/components/Display";
import { NavList } from "@/components/NavList";
import Products  from "@/components/Shelf";
import CartPage from "@/components/cart/Cart";
import { CartProvider } from "@/components/cart/CartContext";
//import { SearchBar } from "@/components/search/SearchBar";




export default function Market(){
    return(
        <div>
            
            <CartProvider>
            
            <NavList/>
            <ProductGallery/>
            
            <MerxLayout>              
                <Items/>
                <ItemDisplay/>
                <Products/>
                <CartPage/>
            </MerxLayout>
     
            </CartProvider>

        </div>
    )

}