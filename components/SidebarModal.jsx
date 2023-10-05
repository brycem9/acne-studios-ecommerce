import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleModal } from "@/redux/SidebarSlice";
import { products } from "../data";

function SidebarModal({ selectedProduct, cart }) {
  const modal = useSelector((state) => state.sidebar.boolean);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  
  const enableBodyScroll = () => {
    document.body.classList.remove("body-scroll-lock");
  };

  const disableBodyScroll = () => {
    document.body.classList.add("body-scroll-lock");
  };

  
  useEffect(() => {
    if (modal) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll(); 
    };
  }, [modal]);


  function incrementCount() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  if (!modal) {
    return;
  }

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 ">
      <div
        onClick={() => dispatch(handleModal(false))}
        className="bg-black cursor-pointer w-full hover:bg-opacity-30 absolute top-0 left-0 bg-opacity-40 z-50 h-screen"
      ></div>
      <div className="bg-white w-[380px] z-[51] h-screen top-0 right-0 absolute  text-xs">
        <div className="flex justify-between p-2">
          <h1>BAG 00</h1>
          <h1
            className="cursor-pointer text-[#0018A8]"
            onClick={() => dispatch(handleModal(false))}
          >
            X CLOSE
          </h1>
        </div>
        <div className="bg-[#F2F2F2]  -black z-[48] border flex flex-col justify-between h-full">
          <div className=" bg-white ">
            {/* <h1>*EMPTY*</h1> */}
            <div className="cart__product--container max-h-[615px] overflow-y-auto -mr-[5.5px]">
              {cart.map((cartItem) => {
                return (
                  <div key={cartItem.id}>
                    <div className="flex justify-between border-t border-black border-b-[#E5E7EB] border-b">
                      <h1>{cartItem.name}</h1>
                      <p>${cartItem.price}</p>
                    </div>
                    <div className="flex w-full  border-black">
                      <div className="">
                        <img className="w-[129px]" src={cartItem.imageUrl} alt="" />
                      </div>
                      <div className="w-[320px]">
                        <div className="border-b">
                          <h1 className="">{cartItem.color}</h1>
                        </div>
                        <div className="flex flex-col h-[145px] justify-between">
                          <h1>ONE SIZE</h1>
                          <div className="flex w-full  text-sm border-t ">
                            <button
                              className=" hover:outline outline-1 -outline-offset-1 w-1/3 p-1"
                              onClick={decrementCount}
                            >
                              —
                            </button>
                            <input
                              type="number"
                              placeholder="1"
                              value={count}
                              onChange={(event) => setCount(event.target.value)}
                              max={10}
                              min={1}
                              className="w-1/3 pl-[40px] hover:outline focus:outline focus:outline-black -outline-offset-1 outline-1  focus:bg-[#e8f0fe] bg-[#F2F2F2]"
                            />
                            <button
                              onClick={incrementCount}
                              className="text-[25px] font-light hover:outline outline-1 -outline-offset-1 w-1/3"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-end border-t">
                          <h1 className="text-[#0018A8]">X REMOVE</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-footer pb-1 bg-[#F2F2F2] border-t  absolute bottom-0 left-0 right-0 border-black ">
            <div className="flex p-1 justify-between ">
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