import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import SiteMenu from "@/components/SiteMenu";
import Link from "next/link";
import { useRouter } from "next/router";

function FW23Denim() {
  const [hovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const router = useRouter()

  const handleClick = () => {
    const newUrl = '/home';
    router.push(newUrl);
  }


  return (
    <div>
      <Navbar />
      <SiteMenu/>
      
      <div className="border-b">
        <div className="mt-20 ml-3">
          <h1 className="text-xs pb-3">KYLIE JENNER FW23 DENIM</h1>
          <p className="text-xs">
            Kylie Jenner is the new face of Acne Studios denim, photographed by
            Carlijn Jacobs in Los Angeles. Discover the new 2023 <br />{" "}
            silhouette, ultra-oversized and unisex, alongside other iconic denim
            styles in the distressed Penicillin wash and a waxy oil <br />{" "}
            animation.
          </p>
        </div>
      </div>
      <div className="flex justify-between ml-3 mr-3">
        <h1>x items</h1>
        <div className="flex">
          <AdjustmentsHorizontalIcon className="w-5" />
          <h1>FILTER</h1>
        </div>
      </div>

      <div className="">
        <div className="flex h-auto">
          
          
          <div className="kylie-container flex flex-col justify-end" >
            <div className="flex justify-between text-xs bg-white p-2">
               <h1>MULTIPOCKET MINI BAG <sup className="tracking-wider">RUNWAY SHOW</sup> </h1>
               <p>$1,300</p>
            </div>
           
          </div>
          <div className="product-container flex flex-wrap">
           
           <div onClick={handleClick} className="cursor-pointer product-img-container flex flex-col justify-end -outline-offset-1 outline-[1px] hover:outline ">
              <div  className="flex justify-between bg-white p-2 text-xs">
                <h1>LOOSE FIT DENIM JACKET</h1>
                <p>$500</p>
              </div>
            </div>
            <div className="product-img-container flex flex-col justify-end -outline-offset-1 outline-[1px] hover:outline ">
              <div className="flex justify-between bg-white p-2 text-xs">
                <h1>LOOSE FIT DENIM JACKET</h1>
                <p>$500</p>
              </div>
            </div>
            <div className="product-img-container flex flex-col justify-end -outline-offset-1 outline-[1px] hover:outline ">
              <div className="flex justify-between bg-white p-2 text-xs">
                <h1>LOOSE FIT DENIM JACKET</h1>
                <p>$500</p>
              </div>
            </div>
            <div className="product-img-container flex flex-col justify-end -outline-offset-1 outline-[1px] hover:outline ">
              <div className="flex justify-between bg-white p-2 text-xs">
                <h1>LOOSE FIT DENIM JACKET</h1>
                <p>$500</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FW23Denim;
