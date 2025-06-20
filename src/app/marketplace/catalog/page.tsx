import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mid } from "@/components/MidSection";
import { NavList } from "@/components/NavList";
import { Catalog } from "@/components/Catalog";
import { MerxLayout } from "@/components/merxDash";


export default function Sell(){
    return(
        <div>
            <Header/>
            <NavList/>
            <MerxLayout>
            <Catalog/>
            </MerxLayout>
            <Mid/>
            <Footer/>

        </div>
    )

}