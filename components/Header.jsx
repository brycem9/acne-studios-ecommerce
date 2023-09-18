import React, { useState } from "react";

function Header() {
  const [hovered, setIsHovered] = useState(false);
  const [hovered2, setIsHovered2] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div>
      <a href="">
        <div
          className="mt-1 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hovered ? (
            <h1 className="text-xs tracking-wider sticky pb-2 pl-3 z-10 left-0 top-9">
              KYLIE JENNER FW23 DENIM {">"} SHOP NOW
            </h1>
          ) : (
            <h1 className="text-xs tracking-wider sticky  pb-2 pl-3 z-10 left-0 top-9 ">
              KYLIE JENNER FW23 DENIM
            </h1>
          )}{" "}
          <div className="img-container "></div>
        </div>
      </a>

      <div>
        <a href="">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="img-container2">
              <div className="text-container">
                {hovered2 ? (
                <h1 className="text-xs tracking-wider sticky text-link pl-3 z-10 left-0 top-8">
                  WOMEN'S NEW ARRIVALS {">"} SHOP NOW
                </h1>
              ) : (
                <h1 className="text-xs tracking-wider text-link sticky pl-3 z-10 left-0 top-8 ">
                  WOMEN'S NEW ARRIVALS
                </h1>
              )}{" "}
              </div>
              
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
