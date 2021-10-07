import React from "react";
import { Link } from "react-router-dom";

const FourO4 = () => {
  return (
    <div>
      <div class="h-screen w-screen bg-yellow-600 flex justify-center flex-wrap">
        <p class="font-sans text-white error-text text-9xl pt-52 ">404</p>
      </div>

      <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span class="opacity-50">Take me back to</span>
        <Link class="border-b" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default FourO4;
