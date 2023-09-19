import Navbar from "../components/Navbar";
import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";

function FW23Denim() {
  return (
    <div>
      <Navbar />
      <div className="flex z-19 fixed top-[29px] left-0 right-0 bg-[#F2F2F2] items-center h-[30px] p-3 ">
        <ul className="flex link-bar text-xs items-center space-x-[30px]">
          <a className="link-bar-anchor mr-1" href="">
            <li>Kylie Jenner FW23 Denim</li>
          </a>
          <a href="" className="link-bar-link">
            <li>Jeans</li>
          </a>
          <a href="" className="link-bar-link">
            <li>New Arrivals</li>
          </a>
          <a href="" className="link-bar-link">
            <li>Personalisation</li>
          </a>
          <a href="" className="link-bar-link">
            <li>Platt bag</li>
          </a>
        </ul>
      </div>
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
      
      <div className="flex">
        <figure className="kylie-container">
          <img className="" src="\assets\kylie\denim-3.jpg" alt="" />
        </figure>
        <div className="product-container flex flex-wrap">
          <div className="product-img-container ">
            <img
              className=""
              src="\assets\products\denim\jackets\C90095-900_F.jpg"
              alt=""
            />
          </div>
          <div className="product-img-container">
            <img
              className=""
              src="\assets\products\denim\jackets\C90095-900_F.jpg"
              alt=""
            />
           
          </div>
          <div className="product-img-container">
            <img
              className=""
              src="\assets\products\denim\jackets\C90095-900_F.jpg"
              alt=""
            />
           
          </div>
          <div className="product-img-container">
            <img
              className=""
              src="\assets\products\denim\jackets\C90095-900_F.jpg"
              alt=""
            />
           
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default FW23Denim;
