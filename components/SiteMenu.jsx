import React from 'react'
import  Link  from "next/link"


function SiteMenu() {
  return (
    <div>
        <div className="flex z-[19] site-menu whitespace-nowrap fixed top-[29px] left-0 right-0 bg-[#F2F2F2] items-center h-[30px] p-3 ">
        <ul className="flex link-bar text-xs items-center space-x-[30px]">
          <a className="link-bar-anchor mr-1" href="/FW23Denim">
            <li>Kylie Jenner FW23 Denim</li>
          </a>
          <Link href="/home" className="link-bar-link">
            <li>Jeans</li>
          </Link>
          <a href="" className="link-bar-link">
            <li>New Arrivals</li>
          </a>
          <a href="" className="link-bar-link">
            <li>Personalisation</li>
          </a>
          <a href="" className="link-bar-link">
            <li>Platt bag</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default SiteMenu
