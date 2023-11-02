import React from "react";

export default function HomeLink() {
  return (
    <>
      <div className="sticky home-link h-0 w-56 z-30 -translate-x-[50%] -translate-y-[50%] top-[8%] left-[50%]">
        <a href="/home">
          <img
            className="pt-4"
            src="\assets\logos\acne_studios_logo.svg"
            alt=""
          />
        </a>
      </div>
      <div className="sticky mobile-home-link h-0 w-48 z-30 -translate-x-[45%] -translate-y-[50%] top-[8%] left-[50%]">
        <a href="/home">
          <img
            className="pt-4"
            src="\assets\logos\acne_studios_logo.svg"
            alt=""
          />
        </a>
      </div>
    </>
  );
}
