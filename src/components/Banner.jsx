import React from "react";
import { BsTelephone } from "react-icons/bs";

export default function Banner() {
  return (
    <div className="h-full lg:h-[100px] bg-accent flex justify-center items-center py-4">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-primary lg:pb-0 text-center ">Contacteaza-ne chiar acum!</h2>
          <a href="tel:+40742933714" className="flex items-center gap-x-2 text-2xl text-primary font-semibold">
            <BsTelephone size={30} />
            <span>+ 0742 933 714</span>
          </a>
        </div>
      </div>
    </div>
  );
}
