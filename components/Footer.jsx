import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="flex justify-between p-1 pl-3">
        <ul>
          <li className="footer--link">live chat</li>
          <li className="footer--link">call</li>
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
        <ul>
          <li className="footer--link">instagram</li>
          <li className="footer--link">facebook</li>
          <li className="footer--link">twitter</li>
          <li className="footer--link">pinterest</li>
          <li className="footer--link">weibo</li>
        </ul>
      </div>
      <div className="flex justify-between w-full p-1 pl-3 ">
        <ul>
          <li className="footer--link"> <span className="text-black">© ACNE STUDIOS 2023</span>  </li>
        </ul>
        <ul>
        <li className="footer--link">shipping to united states(English)</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 text-sm p-3 text-gray-500">
        <p>*Please note that some products may be sent from Sweden due to unavailable shipments from US. Import duties included.</p>
      </div>
    </div>
  );
}

export default Footer;
