import Navbar from "../components/Navbar";
import React, { useState }  from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import SiteMenu from "@/components/SiteMenu";
import { useRouter } from "next/router";
import { products } from "../data";
import Product from "@/components/Product";
import SidebarModal from "@/components/SidebarModal";
import HomeLink from "@/components/HomeLink";
import MobileMenu from "@/components/MobileMenu";
import { handleModal } from "@/redux/SidebarSlice";
import { useDispatch } from "react-redux";


 
   

function FW23Denim() {
   const router = useRouter();

   const dispatch = useDispatch();
    const handleClick = () => {
        const newUrl = `/info/?id=${products[8].id}`;
        router.push(newUrl);
      };

    const handleClick2 = () => {
        const newUrl = `/info/?id=${products[9].id}`;
        router.push(newUrl);
      };
      const [cart, setCart] = useState(() => {
        if (typeof window !== "undefined") {
          const storedCart = localStorage.getItem("cart");
          return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
      });

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
      <SidebarModal cart={cart} removeFromCart={handleRemoveFromCart}/>
      <Navbar cart={cart} />
      <SiteMenu />
      <div className="border-b">
        <div className="mt-20 ml-3">
          <h1 className="text-xs pb-3">KYLIE JENNER FW23 DENIM</h1>
          <p className="text-xs pb-3 text">
            Kylie Jenner is the new face of Acne Studios denim, photographed by
            Carlijn Jacobs in Los Angeles. Discover the new 2023 <br />{" "}
            silhouette, ultra-oversized and unisex, alongside other iconic denim
            styles in the distressed Penicillin wash and a waxy oil <br />{" "}
            animation.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-3 mr-3">
        <h1 className="text-sm text-stone-500">10 items</h1>
        <div className="flex">
          <AdjustmentsHorizontalIcon className="w-5" />
          <h1>FILTER</h1>
        </div>
      </div>
      <HomeLink/>
      <div className="">
        
        <div className="flex product-wrapper">
          <div onClick={handleClick} className="kylie-container cursor-pointer flex flex-col justify-end">
            <div  className="flex product-info justify-between  text-[#0018A8] text-xs bg-white p-2">
              <h1>
                MULTIPOCKET MINI BAG{" "}
                <sup className="tracking-wider  text-black">RUNWAY SHOW</sup>{" "}
              </h1>
              <p className="text-black">$1,300</p>
            </div>
          </div>
          <div className="product-container flex flex-wrap">
            {products.slice(0, 4).map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex product-wrapper">
          <div className="product-container flex flex-wrap">
            {products.slice(4, 8).map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <div onClick={handleClick2} className="kylie-container2 cursor-pointer flex flex-col justify-end">
            <div className="flex product-info justify-between text-xs text-[#0018A8] bg-white p-2">
              <h1>
                MULTIPOCKET BAG{" "}
                <sup className="text-black tracking-wider">RUNWAY SHOW</sup>{" "}
              </h1>
              <p className="text-black">$1,550</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-24">
          <button  onClick={() => dispatch(handleModal(true))} className="bg-black text-white text-sm w-80 hover:bg-[#0018A8] h-14 p-3">
            CONTINUE TO CART
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FW23Denim;