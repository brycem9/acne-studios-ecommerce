import React from "react";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { handleModal } from "@/redux/SidebarSlice";

function Navbar(productExistsInCart) {
  const dispatch = useDispatch();

  return (
    <nav className="flex navbar-container z-20 fixed top-0 left-0 right-0 bg-white items-center h-[30px] p-3 ">
      <div className="basis-[50%]">
        <div className="flex navbar-content">
          <a href="/home" className="basis-[50%] hover:text-gray-500">
            <div>ACNESTUDIOS.COM</div>
          </a>
          <ul className="flex ml-[10px]">
            <a href="">
              <li className=" transition-all hover:text-gray-500 duration-300 mr-6">
                WOMAN
              </li>
            </a>
            <a href="">
              <li className="transition-all hover:text-gray-500 duration-300 ">
                MAN
              </li>
            </a>
          </ul>
        </div>
        <div className="mobile-content">
          <div className="flex">
            <Bars3Icon className="w-3.5" />
            <h1>MENU</h1>
          </div>
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
          <div className="flex ">
            <div className="flex items-center ml-6">
              <button className="flex items-center nav--button">
                <QuestionMarkCircleIcon className="w-6 pr-2" />
                <h1 className="whitespace-nowrap nav__link--title">CLIENT SERVICES</h1>
              </button>
              <button className="flex items-center nav--button">
                <UserIcon className="w-6 pr-2" />
                <h1 className="nav__link--title">ACCOUNT</h1>
              </button>

              <button
                onClick={() => dispatch(handleModal(true))}
                className="flex transition-all duration-150 hover:text-gray-500 items-center nav--button"
              >
                <ShoppingBagIcon className="w-6 pr-2" />
                <h1 className="nav__link--title">BAG</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
