import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { products } from "../data";

function InfoUI({ product }) {
  return (
<div className="flex"><div className="w-[50%] ">
          <img
            className="pt-[52px]"
            src={product.infoImageUrl}
            alt=""
          />
          <img
            className=""
            src={product.infoImageUrl2}
            alt=""
          />
          <img
            className=""
            src={product.infoImageUrl3}
            alt=""
          />
          <img
            className=""
            src={product.infoImageUrl4}
            alt=""
          />
          <img
            className=""
            src={product.infoImageUrl5}
            alt=""
          />
          <img
            className=""
            src={product.infoImageUrl6}
            alt=""
          />
        </div>
    <div className="w-[30%] h-[1200px] sticky -top-[279px]  p-3 text-xs">
      <div className="fixed  w-[31%] z-10 h-12 top-[15px]  mt-[44px] bg-white ">
        <div className="mt-12  bg-white flex justify-between ">
          <h1 className="mt-8">{product.name }</h1>
          <p className="mr-8 mt-8">${product.price}</p>
        </div>
        <div>
          <h1 className="pt-1  bg-white pb-1">{product.color}</h1>
        </div>
      </div>

      <div className="flex mt-44">
        <img
          className="w-[60px] "
          src="\assets\products\denim\jackets\LOOSE-FIT-DENIM-JACKET\loose-fit-denim-product-image.jpg"
          alt=""
        />
        <img
          className="w-[60px] "
          src="\assets\products\denim\jackets\LOOSE-FIT-DENIM-JACKET\loose-fit-denim-product-image.jpg"
          alt=""
        />
      </div>
      <div className="w-full h-[46px] mt-5 flex">
        <div className="w-[40%] hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1">
          <h1>XXS/XS</h1>
        </div>
        <div className="w-[40%] hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black h-[44px] p-1 ">
          <h1>S/M</h1>
        </div>
        <div className="w-[40%] hover:text-[#0018A8] border hover:border-l hover:border hover:border-black  h-[44px] p-1">
          <h1>L/XL</h1>
        </div>
      </div>
      <div className="bg-[#F7F7F7] h-[70px] p-2 mt-6">
        <h2 className="text-[8px]">UNISEX SIZING</h2>
        <p className="text-gray-500 text-[13px]">
          Unisex sizes run large for women. Select 1 size smaller than your
          normal size.
        </p>
      </div>
      <div className="flex items-center h-[100px]">
        <button className="bg-[#0018A8] sticky top-[147px] text-white w-[95%] h-[60px]">
          ADD TO BAG
        </button>
        <div className="w-[15%] justify-center sticky top-[147px] border border-[#0018A8] h-[60px] flex">
          <PlusIcon className="w-6 text-[#0018A8]" />
        </div>
      </div>
      <div className="border hover:outline  hover:-outline-offset-1 outline-1 hover:cursor-pointer outline-black ">
        <div className="flex justify-between  pl-3 pt-2 pb-1">
          <h1 className="text-[#0018A8]">
            FREE DELIVERY{" "}
            <sup className="font-bold text-black">60607, CHICAGO**</sup>{" "}
          </h1>
          <ChevronRightIcon className="text-gray-500 w-4 mr-1" />
        </div>
        <p className="pl-3 pb-1">
          Estimated delivery Oct 02<sup>nd</sup>. Sending from the US *{" "}
        </p>
      </div>
      <div className="border hover:outline hover:-outline-offset-1 outline-1 hover:cursor-pointer outline-black">
        <div className="flex justify-between pl-3 pt-2 pb-1">
          <h1 className="text-[#0018A8]">FREE RETURNS ONLINE AND IN-STORE</h1>
          <ChevronRightIcon className="text-gray-500 w-4 mr-1" />
        </div>
        <p className="pl-3 pb-1">Use enclosed return slip</p>
      </div>
      <div className="border hover:outline hover:-outline-offset-1 outline-1 hover:cursor-pointer outline-black">
        <div className="flex justify-between -z-10 pl-3 pt-2 pb-1">
          <h1 className="text-[#0018A8]">
            PICK UP IN STORE{" "}
            <sup className="text-black font-bold">6 STORES</sup>{" "}
          </h1>
          <ChevronRightIcon className="text-gray-500 w-4 mr-1" />
        </div>
        <p className="pl-3 pb-1">Select a size to view in-store availability</p>
      </div>
      <div className="mt-10">
        <p>
          {product.description}
        </p>
      </div>
      <div className="mt-6 ml-[17px]  w-full ">
        <ul className="capitalize ">
          <li className="list-info p-1">Oversized unisex fit</li>
          <li className="list-info p-1">Hip length</li>
          <li className="list-info p-1">Dropped shoulders</li>
          <li className="list-info p-1">Extra long sleeves</li>
          <li className="list-info p-1">Button-up closure</li>
          <li className="list-info p-1">
            Female model is 179 cm / 5′11 and wears a size S/M
          </li>
          <li className="list-info p-1 ">
            Male model is 189 cm / 6′2 and wears a size S/M
          </li>
          <li className="list-info p-1 ">Style ID: FN-UX-OUTW000018</li>
          <li className="list-info p-1 ">Main material: 100% organic cotton</li>
        </ul>
      </div>
    </div></div>
    
  );
}

export default InfoUI;
