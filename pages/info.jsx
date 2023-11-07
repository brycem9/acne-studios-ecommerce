import Navbar from "@/components/Navbar";
import SidebarModal from "@/components/SidebarModal";
import SiteMenu from "@/components/SiteMenu";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import HomeLink from "@/components/HomeLink";
import { useRouter } from "next/router";
import { products } from "../data";
import InfoUI from "@/components/InfoUI";
import MobileMenu from "@/components/MobileMenu";

function info() {
  const router = useRouter();
  const { id } = router.query;
  const selectedProduct = products.find((product) => product.id === id)
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
 

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  function updateSelectedSize(size) {
    setSelectedSize(size);
  }


  function addToCart(selectedProduct, selectedSize) {
    const updatedCart = [...cart, { ...selectedProduct, size: selectedSize }];
    setCart(updatedCart);
  
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function handleRemoveFromCart(productId) {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  return (
    <div>
      <MobileMenu/>
      <SidebarModal selectedProduct={selectedProduct} cart={cart} removeFromCart={handleRemoveFromCart} />
      <Navbar cart={cart} />
      <SiteMenu />
      <HomeLink />

      {selectedProduct ? (
       <InfoUI
       product={selectedProduct}
       addToCart={() => addToCart(selectedProduct, selectedSize)}
       updateSelectedSize={updateSelectedSize}
       cart={cart}
     />
      ) : (
        <>
          <div className="w-[50%] ">
            <div className="h-[1000px] w-full bg-white"></div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default info;
