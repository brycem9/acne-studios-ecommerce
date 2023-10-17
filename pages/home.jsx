import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import SidebarModal from "@/components/SidebarModal";

export default function Landing() {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  return (
    <div>
      <SidebarModal cart={cart}/>
      <Navbar />
      <div className="flex justify-center">
        
        <a href="/home">
          <img
            className="acne-splash w-[75%] pb-9 z-30 fixed top-[47%] left-[50%] mix-blend-luminosity"
            src="/assets/logos/denim-logo.png"
          />
        </a>
      </div>
     
      <Header />
      <Footer />
    </div>
  );
}
