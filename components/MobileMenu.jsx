import { handleMobileMenu } from "@/redux/MobileMenuSlice";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MobileMenu() {
  const dispatch = useDispatch();
  const mobileMenu = useSelector((state) => state.mobileMenu.boolean);
  
  useEffect(() => {
    if (mobileMenu) {
      // Add the class to the body when the menu is open
      document.body.classList.add('overflow-hidden');
    } else {
      // Remove the class when the menu is closed
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileMenu]);

if (!mobileMenu) {
  return;
}


  return (
   
    <div className="absolute top-0 bg-white h-screen w-full z-[100]">
      <div className=" border-b border-black">
        <div className=" flex justify-between pb-6 text-xs p-2">
          <a href="/home">
            <h1>ACNESTUDIOS.COM</h1>
          </a>
          <h1
            onClick={() => {
              dispatch(handleMobileMenu(false));
              console.log("Mobile menu closed");
            }}
            className="text-[#0018A8] cursor-pointer"
          >
            X CLOSE
          </h1>
        </div>
      </div>
      <ul className="text-xs">
        <li className="border-b pb-6 p-2 border-gray-400 flex justify-between items-center">
          SEARCH{" "}
        </li>
        <li className="border-b pb-6 p-2 border-gray-400 flex justify-between items-center">
          WOMAN <ChevronRightIcon className="w-4" />
        </li>
        <li className="border-b pb-6 p-2 border-gray-400 flex justify-between items-center">
          MAN <ChevronRightIcon className="w-4" />
        </li>
        <li className="border-b pb-10 p-2 border-gray-400"></li>
        <li className="border-b pb-6 p-2 border-gray-400 flex justify-between items-center">
          ACCOUNT <ChevronRightIcon className="w-4" />
        </li>
        <li className="border-b pb-6 p-2 border-gray-400">STORES</li>
        <li className="border-b pb-6 p-2 border-gray-400">
          SHIPPING TO UNITED STATES (ENGLISH)
        </li>
        <li className="border-b pb-10 p-2 border-gray-400"></li>
        <li className="border-b pb-6 p-2 border-gray-400 flex justify-between items-center">
          CLIENT SERVICES <ChevronRightIcon className="w-4" />
        </li>
        <li className="border-b pb-6 p-2 border-gray-400">
          LIVE CHAT <sup className="text-red-500">NOT AVAILABLE</sup>{" "}
        </li>
        <li className="border-b pb-6 p-2 border-gray-400">
          CALL <sup className="text-red-500">NOT AVAILABLE</sup> <br /> +1(555)
          555-5555
        </li>
        <li className=" pb-6 p-2  border-gray-400">
          EMAIL <br />{" "}
          <span className="lowercase">clientservices@acnestudios.com</span>{" "}
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
