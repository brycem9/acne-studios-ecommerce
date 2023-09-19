import React from "react";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "next/link";

function Navbar() {
  return (
    <nav className="flex z-20 fixed top-0 left-0 right-0 bg-white items-center h-[30px] p-3 ">
      <div className="basis-[50%]">
        <div className="flex">
          <a href="/home" className="basis-[50%] hover:text-gray-500">
            <div>ACNESTUDIOS.COM</div> 
          </a>
          <ul className="flex ml-[10px]">
            <li className="mr-6">WOMAN</li>
            <li className="">MAN</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex ">
          <div className="flex hover:outline  hover:placeholder-black pl-2 outline-black search outline-1 mr-8">
            <MagnifyingGlassIcon className="glass-icon w-3.5  text-gray-500" />
            <input
              placeholder="SEARCH"
              className="focus:outline-none hover:placeholder-black p-2 w-[350px] h-[29px]"
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
