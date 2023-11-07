import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";





export default function Home() {


  
  return (
    <main>
      <Navbar /> 
      <Header />
      <div className="flex justify-center">
        
        <a href="/home">
          <img
            className="acne-splash w-[75%] pb-9 z-30 fixed top-[47%] left-[50%] mix-blend-luminosity"
            src="/assets/logos/denim-logo.png"
          />
        </a>
      </div>
      <Footer />
    </main>
  );
}
