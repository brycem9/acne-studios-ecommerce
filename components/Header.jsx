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
      <div
        className="img-container-outer mt-8 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-container">
          {hovered ? (
          <h1 className="text-xs sticky pt-2 pb-2 pl-3 z-10 left-0 top-0">
            KYLIE JENNER FW23 DENIM {">"} SHOP NOW
          </h1>
        ) : (
          <h1 className="text-xs sticky pt-2 pb-2 pl-3 z-10 left-0 top-0 ">
            KYLIE JENNER FW23 DENIM
          </h1>
        )}{" "}
        </div>
        
      </div>
      <div >
       <div className="img-container2">
          {hovered ? (
          <h1 className="text-xs sticky pt-2  pl-3 z-10 left-0 top-11">
            WOMEN'S NEW ARRIVALS {">"} SHOP NOW
          </h1>
        ) : (
          <h1 className="text-xs sticky pt-2 pl-3 z-10 left-0 top-11 ">
            WOMEN'S NEW ARRIVALS
          </h1>
        )}{" "}
        </div> 
      </div>
      
    </div>
  );
}

export default Header;
