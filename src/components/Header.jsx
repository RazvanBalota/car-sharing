import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";

export default function Header() {
  return (
    <header className="hidden md:flex bg-accent items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div className="flex">
            <a
              href="mailto:brs.transport@yahoo.com"
              className="flex gap-x-2 text-primary font-bold tracking-wide px-5 py-4 text-sm cursor-pointer hover:text-secondary transition-all duration-150">
              <AiOutlineMail size={20} />
              <span> brs.transport@yahoo.com</span>
            </a>
            <a
              href="tel:+40754424285"
              className="flex gap-x-2 text-primary font-bold tracking-wide px-5 py-4 text-sm cursor-pointer hover:text-secondary transition-all duration-150">
              <BsTelephone size={20} />
              <span>+ 0754 424 285</span>
            </a>
          </div>
          <div>
            <a href="www.facebook.com/">
              <CiFacebook
                size={30}
                className="text-primary cursor-pointer hover:text-secondary transition-all duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
