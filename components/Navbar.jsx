import React from "react";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className="flex z-20 fixed top-0 left-0 right-0 bg-white items-center h-[35px] p-3 border">
      <div className="basis-[50%]">
        <div className="flex">
          <a className="basis-[50%]" href="">
            ACNESTUDIOS.COM
          </a>
          <ul className="flex ">
            <li className="mr-8">WOMAN</li>
            <li className="">MAN</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex ">
          <div className="flex hover:border pl-2 border-black mr-8">
            <MagnifyingGlassIcon className="w-4 text-gray-500" />
            <input
              placeholder="SEARCH"
              className="hover p-3  w-[350px] h-[34px]"
              type="text"
            />
          </div>
          <div className="flex">
            <div className="flex items-center ml-6">
              <button className="flex items-center nav--button">
                <QuestionMarkCircleIcon className="w-6 pr-2" />
                <h1 className="whitespace-nowrap">CLIENT SERVICES</h1>
              </button>
              <button className="flex items-center nav--button">
                <UserIcon className="w-6 pr-2" />
                <h1>ACCOUNT</h1>
              </button>
              <button className="flex items-center nav--button"><ShoppingBagIcon className="w-6 pr-2" />
              <h1>BAG</h1></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
