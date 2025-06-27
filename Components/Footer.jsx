import React from "react";

const Footer = () => {
  return (
    // <div className="mt-16 h-30 absolute w-full flex justify-center bg-[#171717] backdrop-blur-lg">
    //   <div className="flex mt-3  flex-col">
    //     <p className="text-3xl text-[#F5E8D8] font-medium ">texts.</p>
    //     <p className="text-xl text-[#F5E8D8] font-mono">We connect people </p>
    //   </div>
    // </div>

    <footer className="bg-[#171717] py-3 absolute w-full mt-24 lg:mt-16">
      <div className="container mx-auto px-2 text-center">
        <p className="text-[#F5E8D8] font-medium">
          © 2025 <span className="text-[#DAA520] font-bold">texts.</span> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
