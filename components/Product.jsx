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
        const newUrl = `/info/?id=${product.id}`;
        router.push(newUrl);
      };
  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${hoveredProduct ? product.hoverUrl : product.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: hoveredProduct === true ? "100%" : "cover",
        
      }}
      className="cursor-pointer product-img-container w-[50%]  flex flex-col justify-end -outline-offset-1 outline-[1px] hover:outline"
    >
      <div className="flex product-info justify-between text-[#0018A8] bg-white  p-2 text-xs">
        <h1 className="product-name">{product.name}</h1>
        <p className="text-black product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
