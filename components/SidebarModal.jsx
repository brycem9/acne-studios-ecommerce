import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {handleModal } from "@/redux/SidebarSlice";

function SidebarModal() {
  const modal = useSelector((state) => 
      state.sidebar.boolean
  );
  const dispatch = useDispatch();

  if(!modal) {
    return 
  }
  
   
  return (
    
    <div className="flex relative">
      <div
        onClick={() => dispatch(handleModal(false))}
        className="bg-black cursor-pointer w-[75%] hover:bg-opacity-30 absolute top-0 left-0 bg-opacity-40 z-50 h-screen"
      ></div>
      <div className="bg-white w-[25%] h-screen top-0 right-0 absolute z-[49] text-xs">
        <div className="flex justify-between p-2">
          <h1>BAG 00</h1>
          <h1 className="cursor-pointer" onClick={() => dispatch(handleModal(false))} >X CLOSE</h1>
        </div>
        <div className="bg-[#F2F2F2]  border-t-black  border flex flex-col justify-between h-full">
          <div className="p-2">
            <h1>MISSING ITEMS IN YOUR CART?</h1>
          </div>
          <div className="cart-footer mb-10 border-t  border-black ">
            <div className="flex p-1 justify-between">
              <h1>SUBTOTAL</h1>
              <p>$0.00</p>
            </div>
            <p className="text-gray-500 pl-1 pb-1">
              Sending from the U.S. * No extra import duties.
            </p>
            <div className="flex p-1 border-t justify-between">
              <h1>SHIPPING</h1>
              <p>FREE</p>
            </div>
            <p className="text-gray-500 pb-1 pl-1">
              UPS Ground Order delivered within 2-3 business days
            </p>
            <div className="flex p-1 border-t border-black justify-between">
              <h1>PAYMENT</h1>
            </div>
            <div className="logos pl-1 ">
              <div className="logo-slide justify-between flex">
                <img
                  className="mix-blend-multiply w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw8a495d30/icons/payment/visa.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwa0263b78/icons/payment/mastercard.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw0a1a9378/icons/payment/amex.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwee634d27/icons/payment/diners.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw2bc8cb2f/icons/payment/discover.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply ml-2 mr-2 w-8"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw10dfb11f/icons/payment/paypal.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply  mr-2 w-7 h-2 mt-[5.7px]"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwcf397498/icons/payment/klarna.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply mr-2 w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwb4c5bd98/icons/payment/alipay.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply mr-1 w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw5818cef8/icons/payment/wechatpay.png"
                  alt=""
                />
                <img
                  className="mix-blend-multiply w-10"
                  src="https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw10f12e91/icons/payment/applepay.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarModal;
