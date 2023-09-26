import { useRouter } from "next/router";
import React, { useState } from "react";

const Product = ({ product }) => {
    console.log(product.imageUrl)
    const [hoveredProduct, setHoveredProduct] = useState(false);
  const handleMouseEnter = () => {
    console.log("enter")
    setHoveredProduct(true);
  };

  const handleMouseLeave = () => {
    console.log("exit")
    setHoveredProduct(false);
  };

  const router = useRouter();
    
    
    const handleClick = () => {
        const newUrl = "/home";
        router.push(newUrl);
      };
  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${hoveredProduct ? product.hoverUrl : product.imageUrl})`,
        backgroundSize: hoveredProduct === true ? "100%" : "cover",
      }}
      className="cursor-pointer w-[50%]  flex flex-col justify-end -outline-offset-1 outline-[1px] hover:outline"
    >
      <div className="flex justify-between text-[#0018A8] bg-white  p-2 text-xs">
        <h1>{product.name}</h1>
        <p className="text-black">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
