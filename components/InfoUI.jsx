import {
  CheckIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { products } from "../data";
import { useDispatch } from "react-redux";
import { handleModal } from "@/redux/SidebarSlice";
import { useRouter } from "next/router";
import Carousel from "./Carousel";

function InfoUI({ product, addToCart, updateSelectedSize, cart }) {
  const router = useRouter();
  const { id } = router.query;
  // console.log(id, "logged");
  const selectedProduct = products.find((product) => product.id === id);
  // console.log(selectedProduct);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const sizingType = selectedProduct.sizing;
  const sizingToHTMLMap = {
    SML: (
      <>
        <div className="flex">
          <div
            onClick={() => handleSizeClick("XXS/XS")}
            className={
              isSizeSelected("XXS/XS")
                ? "w-[40%] cursor-pointer bg-[#e8f0fe] outline outline-1 -outline-offset-1 outline-[#0018A8] text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[40%] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1 className={isSizeSelected("XXS/XS") ? "text-[#0018A8]" : ""}>
              XXS/XS
            </h1>
          </div>

          <div
            onClick={() => handleSizeClick("S/M")}
            className={
              isSizeSelected("S/M")
                ? "w-[40%] cursor-pointer bg-[#e8f0fe] outline outline-1 -outline-offset-1 outline-[#0018A8] text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[40%] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1 className={isSizeSelected("S/M") ? "text-[#0018A8]" : ""}>
              S/M
            </h1>
          </div>
          <div
            onClick={() => handleSizeClick("L/XL")}
            className={
              isSizeSelected("L/XL")
                ? "w-[40%] cursor-pointer bg-[#e8f0fe] outline outline-1 -outline-offset-1 outline-[#0018A8] text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[40%] cursor-pointer hover:text-[#0018A8] border-t border-l border-b border-r hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1 className={isSizeSelected("L/XL") ? "text-[#0018A8]" : ""}>
              L/XL
            </h1>
          </div>
        </div>
        <div className="bg-[#F7F7F7] h-[70px] p-2 mt-6">
          <h2 className="text-[8px]">UNISEX SIZING</h2>
          <p className="text-gray-500 text-[13px]">
            Unisex sizes run large for women. Select 1 size smaller than your
            normal size.
          </p>
        </div>
      </>
    ),
    waistSize: (
      <>
        <h1 className="mt-4 mb-3">Waist</h1>
        <div className="flex flex-wrap w-full">
          <div
            onClick={() => handleSizeClick("28")}
            className={
              isSizeSelected("28")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>28</h1>
          </div>
          <div
            onClick={() => handleSizeClick("29")}
            className={
              isSizeSelected("29")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>29</h1>
          </div>
          <div
            onClick={() => handleSizeClick("30")}
            className={
              isSizeSelected("30")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>30</h1>
          </div>
          <div
            onClick={() => handleSizeClick("31")}
            className={
              isSizeSelected("31")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>31</h1>
          </div>
          <div
            onClick={() => handleSizeClick("32")}
            className={
              isSizeSelected("32")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>32</h1>
          </div>
          <div
            onClick={() => handleSizeClick("33")}
            className={
              isSizeSelected("33")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b border-r hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>33</h1>
          </div>
          <div
            onClick={() => handleSizeClick("34")}
            className={
              isSizeSelected("34")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8]  border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8]  border-l border-b  hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>34</h1>
          </div>
          <div
            onClick={() => handleSizeClick("36")}
            className={
              isSizeSelected("36")
                ? "w-[calc(100%/6)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8]  border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/6)] cursor-pointer hover:text-[#0018A8]  border-l border-b border-r hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>36</h1>
          </div>
        </div>
      </>
    ),
    oneSize: (
      <>
        <div className="mt-6">
          <div
            onClick={() => handleSizeClick("ONE SIZE")}
            className={
              isSizeSelected("ONE SIZE")
                ? "w-[40%] cursor-pointer bg-[#e8f0fe] outline outline-1 -outline-offset-1 outline-[#0018A8] text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[40%] cursor-pointer hover:text-[#0018A8] border-t border-l border-r border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1 className={isSizeSelected("ONE SIZE") ? "text-[#0018A8]" : ""}>
              ONE SIZE
            </h1>
          </div>
        </div>
      </>
    ),
    ringSize: (
      <>
        <h1 className=" pt-3 mb-3">Ring Size</h1>
        <div className="flex w-full">
          <div
            onClick={() => handleSizeClick("4")}
            className={
              isSizeSelected("4")
                ? "w-[calc(100%/5)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/5)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>4</h1>
          </div>
          <div
            onClick={() => handleSizeClick("5")}
            className={
              isSizeSelected("5")
                ? "w-[calc(100%/5)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/5)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>5</h1>
          </div>
          <div
            onClick={() => handleSizeClick("6")}
            className={
              isSizeSelected("6")
                ? "w-[calc(100%/5)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/5)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>6</h1>
          </div>
          <div
            onClick={() => handleSizeClick("7")}
            className={
              isSizeSelected("7")
                ? "w-[calc(100%/5)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/5)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>7</h1>
          </div>
          <div
            onClick={() => handleSizeClick("8")}
            className={
              isSizeSelected("8")
                ? "w-[calc(100%/5)] outline outline-1 -outline-offset-1 outline-[#0018A8] bg-[#e8f0fe] cursor-pointer text-[#0018A8] border-t border-l border-b hover:border-l hover:border hover:border-black  h-[44px] p-1"
                : "w-[calc(100%/5)] cursor-pointer hover:text-[#0018A8] border-t border-l border-b hover:border-l border-r hover:border hover:border-black  h-[44px] p-1"
            }
          >
            <h1>8</h1>
          </div>
        </div>
      </>
    ),
  };

  function handleSizeClick(size) {
    if (size === selectedSize) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
      updateSelectedSize(size);
    }
  }

  function isSizeSelected(size) {
    return size === selectedSize;
  }

  function addProductToCart(selectedProduct, selectedSize) {
    if (selectedSize) {
      addToCart(selectedProduct, selectedSize);
    } else {
      alert("Please select a size before adding to the cart.");
    }
  }

  function productExistsInCart() {
    return cart.find((selectedProduct) => selectedProduct.id === id);
  }

  return (
    <div className="flex border-b  border-black">
      <div className="w-[50%] product-info-Ui">
        <img className="pt-[52px] " src={product.infoImageUrl} alt="" />
        <img className="" src={product.infoImageUrl2} alt="" />
        <img className="" src={product.infoImageUrl3} alt="" />
        <img className="" src={product.infoImageUrl4} alt="" />
        <img className="" src={product.infoImageUrl5} alt="" />
        <img className="" src={product.infoImageUrl6} alt="" />
      </div>
      <div className="w-[30%] product-info-Ui h-[1200px] sticky -top-[279px]  p-3 text-xs">
        <div className="fixed  w-[31%] z-10 h-12 top-[15px]  mt-[44px] bg-white ">
          <div className="mt-12  bg-white flex justify-between ">
            <h1 className="mt-8">{product.name}</h1>
            <p className="mr-8 mt-8">${product.price}</p>
          </div>
          <div>
            <h1 className="pt-1  bg-white pb-1">{product.color}</h1>
          </div>
        </div>

        <div className="flex mt-44">
          <img className="w-[60px] " src={product.imageUrl} alt="" />
        </div>

        <div className="w-full h-[46px] mt-5 flex">
          <div className="w-full">{sizingToHTMLMap[sizingType]}</div>
        </div>

        <div className="flex items-center h-[100px] mt-24">
          {productExistsInCart() ? (
            <button
              onClick={() => dispatch(handleModal(true))}
              className="bg-[#66FF00] sticky top-[147px] text-black w-[95%] h-[60px]"
            >
              VIEW BAG
            </button>
          ) : (
            <button
              onClick={() => addProductToCart(selectedProduct, selectedSize)}
              className="bg-[#0018A8] sticky top-[147px] text-white w-[95%] h-[60px]"
            >
              ADD TO BAG
            </button>
          )}
          {productExistsInCart() ? (
            <div className="w-[15%] justify-center sticky top-[147px] border border-[#66FF00] h-[60px] flex">
              <CheckIcon className="w-6 text-[#66FF00]" />
            </div>
          ) : (
            <div className="w-[15%] justify-center sticky top-[147px] border border-[#0018A8] h-[60px] flex">
              <PlusIcon className="w-6 text-[#0018A8]" />
            </div>
          )}
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
          <p className="pl-3 pb-1">
            Select a size to view in-store availability
          </p>
        </div>
        <div className="mt-10">
          <p>{product.description}</p>
        </div>
        <div className="mt-6 ml-[17px]  w-full ">
          <ul className="capitalize ">
            <li className="list-info p-1">{selectedProduct.extraInfo1}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo2}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo3}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo4}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo5}</li>
            <li className="list-info p-1">
            {selectedProduct.extraInfo6}
            </li>
            <li className="list-info p-1 ">
            {selectedProduct.extraInfo7}
            </li>
            <li className="list-info p-1 ">{selectedProduct.extraInfo8}</li>
            <li className="list-info p-1 ">
            {selectedProduct.extraInfo9}
            </li>
          </ul>
        </div>
      </div>
      <div className="mobileUI overflow-x-hidden">
        <div>
          <Carousel
            images={[
              product.infoImageUrl,
              product.infoImageUrl2,
              product.infoImageUrl3,
              product.infoImageUrl4,
              product.infoImageUrl5,
              product.infoImageUrl6,
            ]}
          />
        </div>
        <div className="flex text-sm p-3 justify-between">
          <h1>{product.name}</h1>
          <h1>${product.price}</h1>
        </div>
        <div className="pb-3 pl-3 text-sm">
          <h1> {product.color} </h1>
        </div>
        <div className="text-xs p-3">
        {sizingToHTMLMap[sizingType]}
        </div>
        <div className="flex items-center p-3 h-[90px] mt-2">
          {productExistsInCart() ? (
            <button
              onClick={() => dispatch(handleModal(true))}
              className="bg-[#66FF00] sticky top-[147px] text-black w-[95%] h-[60px]"
            >
              VIEW BAG
            </button>
          ) : (
            <button
              onClick={() => addProductToCart(selectedProduct, selectedSize)}
              className="bg-[#0018A8] sticky top-[147px] text-white w-[95%] h-[60px]"
            >
              ADD TO BAG
            </button>
          )}
          {productExistsInCart() ? (
            <div className="w-[15%] justify-center sticky top-[147px] border border-[#66FF00] h-[60px] flex">
              <CheckIcon className="w-6 text-[#66FF00]" />
            </div>
          ) : (
            <div className="w-[15%] justify-center sticky top-[147px] border border-[#0018A8] h-[60px] flex">
              <PlusIcon className="w-6 text-[#0018A8]" />
            </div>
          )}
        </div>
        <div className="text-sm">
          <div className="border hover:outline m-3 hover:-outline-offset-1 outline-1 hover:cursor-pointer outline-black ">
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
        <div className="border hover:outline m-3 hover:-outline-offset-1 outline-1 hover:cursor-pointer outline-black">
          <div className="flex justify-between pl-3 pt-2 pb-1">
            <h1 className="text-[#0018A8]">FREE RETURNS ONLINE AND IN-STORE</h1>
            <ChevronRightIcon className="text-gray-500 w-4 mr-1" />
          </div>
          <p className="pl-3 pb-1">Use enclosed return slip</p>
        </div>
        <div className="border hover:outline m-3 hover:-outline-offset-1 outline-1 hover:cursor-pointer outline-black">
          <div className="flex justify-between -z-10 pl-3 pt-2 pb-1">
            <h1 className="text-[#0018A8]">
              PICK UP IN STORE{" "}
              <sup className="text-black font-bold">6 STORES</sup>{" "}
            </h1>
            <ChevronRightIcon className="text-gray-500 w-4 mr-1" />
          </div>
          <p className="pl-3 pb-1">
            Select a size to view in-store availability
          </p>
        </div>
        </div>
        
        <div className="mt-10 p-3">
          <p>{product.description}</p>
        </div>
        <div className="mt-6 ml-[17px] p-3 text-sm  w-full ">
          <ul className="capitalize ">
            <li className="list-info p-1">{selectedProduct.extraInfo1}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo2}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo3}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo4}</li>
            <li className="list-info p-1">{selectedProduct.extraInfo5}</li>
            <li className="list-info p-1">
            {selectedProduct.extraInfo6}
            </li>
            <li className="list-info p-1 ">
            {selectedProduct.extraInfo7}
            </li>
            <li className="list-info p-1 ">{selectedProduct.extraInfo8}</li>
            <li className="list-info p-1 ">
            {selectedProduct.extraInfo9}
            </li>
          </ul>
        </div>
        <div className="pb-8 p-2 text-xs text-[#0018A8] border-t border-gray-400 border-b mb-12 mt-12">
          <h1>NEED HELP?</h1>
        </div>
      </div>
    </div>
  );
}

export default InfoUI;
