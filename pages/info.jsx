
import Navbar from "@/components/Navbar";
import SidebarModal from "@/components/SidebarModal";
import SiteMenu from "@/components/SiteMenu";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import HomeLink from "@/components/HomeLink";
import { useRouter } from "next/router";
import { products } from "../data";
import InfoUI from "@/components/InfoUI";

function info() {
  const router = useRouter();
  const { id } = router.query;
  const selectedProduct = products.find((product) => product.id === id);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  function addToCart(selectedProduct) {
    const updatedCart = [...cart, selectedProduct];
    setCart(updatedCart);
    
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  return (
    <div>
      <SidebarModal selectedProduct={selectedProduct} cart={cart} />
      <Navbar />
      <SiteMenu />
      <HomeLink />
      

      {selectedProduct ? (
        <InfoUI
          product={selectedProduct}
          addToCart={() => addToCart(selectedProduct)}
          cart={cart}
        />
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
    </div>
  );
}

export default info