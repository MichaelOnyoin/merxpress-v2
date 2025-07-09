import React from "react";
import { NavList } from "@/components/NavList";
import { Catalog } from "@/components/Catalog";
import { MerxLayout } from "@/components/merxDash";


export default function Sell(){
    return(
        <div>
            <NavList/>
            <MerxLayout>
            <Catalog/>
            </MerxLayout>
           
        </div>
    )

}