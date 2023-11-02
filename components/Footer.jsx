import React from "react";

function Footer() {
  return (
    <div className="border-t-gray-100 border  z-40">
      <div className="flex justify-between footer z-50 p-1 pl-3 pb-10 tracking-wider">
        <ul>
          <li className="footer--link">live chat <sup className="text-red-600">not available</sup> </li>
          <li className="footer--link">call <sup className="text-red-600">not available</sup></li>
          <li className="footer--link">email </li>
        </ul>
        <ul>
          <li className="footer--link">client services</li>
          <li className="footer--link">order status</li>
          <li className="footer--link">register return</li>
          <li className="footer--link">product care</li>
          <div className="mt-6">
            <li className="footer--link">stores</li>
            <li className="footer--link">newsletter</li>
          </div>
        </ul>
        <ul>
          <li className="footer--link">about</li>
          <li className="footer--link">press</li>
          <li className="footer--link">careers</li>
          <li className="footer--link">terms & conditions</li>
          <li className="footer--link">privacy policy</li>
          <li className="footer--link">sustainability</li>
          <li className="footer--link">accessibilty</li>
          <li className="footer--link">whistleblowing</li>
          <li className="footer--link">ca transparency act</li>
          <li className="footer--link">proposition 65</li>
        </ul>
        <ul className="mr-56">
          <li className="footer--link">instagram</li>
          <li className="footer--link">facebook</li>
          <li className="footer--link">twitter</li>
          <li className="footer--link">pinterest</li>
          <li className="footer--link">weibo</li>
        </ul>
      </div>
      <div className="flex footer justify-between w-full p-1 pl-3 ">
        <ul>
          <li className="footer--link"> <span className="text-black">© ACNE STUDIOS 2023</span>  </li>
        </ul>
        <ul>
        <li className="footer--link">shipping to united states(English)</li>
        </ul>
      </div>
      <div className="border-t footer border-gray-300 text-sm p-3 text-gray-500">
        <p>*Please note that some products may be sent from Sweden due to unavailable shipments from US. Import duties included.</p>
      </div>
      <div className="mobile-footer">
        <ul className="text-xs">
          <li className="border-b border-1 pb-5 p-2">CLIENT SERVICES</li>
          <li className="border-b border-1 pb-5 p-2">ACCOUNT</li>
          <li className="border-b border-1 pb-5 p-2">STORES</li>
          <li className="border-b border-1 pb-5 p-2">NEWSLETTER</li>
          <li className="border-b border-1 pb-5 p-2">COMPANY</li>
          <li className="border-b border-1 pb-5 p-2">SHIPPING TO UNITED STATES (ENGLISH)</li>
          <li className="border-b border-1 p-16"></li>
        </ul>
      </div>
      <div className="footer-container mobile-footer">
       <div className="flex justify-between text-xs pb-5 p-1 ">
        <h1>© ACNE STUDIOS 2023</h1>
        <ul className="flex text text-[#0018A8]">
          <a href="http://www.instagram.com/acnestudios"><li className="pr-3">IG</li></a>
          <a href="http://www.facebook.com/acnestudios"><li className="pr-3">FB</li></a>
          <a href="http://www.twitter.com/acnestudios"><li className="pr-3">TW</li></a>
          <a href="http://www.pinterest.com/AcneStudios"><li className="pr-3">PT</li></a>
          <li className="pr-3">WB</li>
        </ul>
      </div>
      <div className="border-t mobile-footer border-gray-300 text-sm p-3 text-gray-500">
        <p>*Please note that some products may be sent from Sweden due to unavailable shipments from US. Import duties included.</p>
      </div>  
      </div>
      
    </div>
  );
}

export default Footer;
