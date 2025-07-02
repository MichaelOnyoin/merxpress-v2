//'use client'
import { Header } from "@/components/Header";
import { Page } from "@/components/Hero";
import { MerxLayout } from "@/components/merxDash/";
import { Mid } from "@/components/MidSection";
import { Dash } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    
    <div>
      
      <Header />
      <Page/>
      <MerxLayout >
        <Dash/>
      </MerxLayout>
      <Mid/>
      <Footer/>
    
    </div>
  );
}
