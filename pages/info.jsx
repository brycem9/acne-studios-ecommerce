import Navbar from "@/components/Navbar";
import SidebarModal from "@/components/SidebarModal";
import SiteMenu from "@/components/SiteMenu";
import React from "react";
import {
  ArrowDownRightIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import HomeLink from "@/components/HomeLink";
import { useRouter } from "next/router";
import { products } from "../data";
import InfoUI from "@/components/InfoUI";




function info() {
  const router = useRouter();
  const { id } = router.query;
  const selectedProduct = products.find((product) => product.id === id);

  return (


    <div>
      <SidebarModal />
      <Navbar />
      <SiteMenu />
      <HomeLink/>
      
        
        <InfoUI product={selectedProduct}/>
      
      <Footer/>
    </div>
  );
}

export default info;
