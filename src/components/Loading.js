import React from "react";

const Loading = () => {
  return (
    <div class="flex justify-center items-center w-full h-full absolute bg-white z-40">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
  );
};

export default Loading;
