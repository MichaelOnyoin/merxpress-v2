import React from "react";
import { Mid } from "@/components/MidSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PayHero } from "@/components/PayHero";
import { ImageGallery } from "@/components/pay/ImageGallery";
import { PaymentFeatures } from "@/components/pay/PaymentFeatures";
export default function MerxPay() {
    return (
        <div className="">
            <Header />         
            <PayHero/>       
            <ImageGallery />
            <PaymentFeatures />
            <Mid />
            <Footer />
        </div>
    );

}