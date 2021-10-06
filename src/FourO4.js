import React from "react";

const FourO4 = () => {
  return (
    <div>
      <div class="h-screen w-screen bg-yellow-600 flex justify-center flex-wrap">
        <p class="font-sans text-white error-text text-9xl pt-52 ">404</p>
      </div>

      <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span class="opacity-50">Take me back to</span>
        <a class="border-b" href="http://localhost:3000">
          Home
        </a>
      </div>
    </div>
  );
};

export default FourO4;
