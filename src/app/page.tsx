//'use client'
import { Page } from "@/components/Hero";
import { MerxLayout } from "@/components/merxDash/";
import { Dash } from "@/components/Dashboard";



export default function Home() {
  return (
    
    <div>
      <Page/>
      <MerxLayout >
        <Dash/>
      </MerxLayout>
      
    </div>
  );
}
