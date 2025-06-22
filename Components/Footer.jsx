import React from "react";

const Footer = () => {
  return (
    // <div className="mt-16 h-30 absolute w-full flex justify-center bg-[#171717] backdrop-blur-lg">
    //   <div className="flex mt-3  flex-col">
    //     <p className="text-3xl text-[#F5E8D8] font-medium ">texts.</p>
    //     <p className="text-xl text-[#F5E8D8] font-mono">We connect people </p>
    //   </div>
    // </div>

    <footer class="bg-[#171717] py-3 absolute w-full mt-16">
      <div class="container mx-auto px-2 text-center">
        <p class="text-[#F5E8D8] font-medium">
          © 2025 <span class="text-[#DAA520] font-bold">texts.</span> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
