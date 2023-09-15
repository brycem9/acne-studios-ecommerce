import React, { useState } from "react";

function Header() {
  const [hovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="">
        {hovered ? (
          <h1 className="text-xs sticky pl-3 z-10 left-0 top-10">
            KYLIE JENNER FW23 DENIM {">"} SHOP NOW
          </h1>
        ) : (
          <h1 className="text-xs sticky pl-3 z-10 left-0 top-10 max-w-[20%] ">
            KYLIE JENNER FW23 DENIM
          </h1>
        )}{" "}

        <img
          className="w-full cursor-pointer  h-full pt-3"
          src={"/assets/kylie/denim-d.jpg"}
          alt="Kylie Jenner FW23 denim"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="">
      <h1 className="text-xs sticky pl-3 z-10 left-0 top-10 max-w-[20%] ">
            KYLIE JENNER FW23 DENIM
          </h1>
        <img
          className="w-full h-full "
          src={"/assets/kylie/denim2-d.jpg"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
