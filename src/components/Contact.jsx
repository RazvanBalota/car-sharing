import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-24 bg-about contactbg lg:bg-fixed">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-primary text-3xl border-b-[4px] pb-1 px-2 text-center lg:text-normal border-b-accent rounded-sm ">
              Contacteaza-ne
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-10 ">
            <div className="max-w-[500px]">
              <h2 className="pb-5">Vrei sa devii partener sau ai mai multe intrebari?</h2>
              <p className="text-primary tracking-wide pb-2">Suntem la dispozitia ta oricand.</p>
              <p className="text-primary tracking-wide">Ia legatura cu noi chiar acum!</p>
            </div>
            <div className="flex flex-col justify-center gap-y-4">
              <div className="flex items-center gap-x-2">
                <BsTelephone size={25} className="text-accent" />
                <p className="text-xl text-primary">Numar de telefon:</p>
                <a href="tel:+40754424285" className="text-xl text-accent hover:scale-105 transition duration-150">
                  + 0754 424 285
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <AiOutlineMail size={25} className="text-accent" />
                <p className="text-xl text-primary">Email:</p>
                <a
                  href="mailto:brs.transport@yahoo.com"
                  className="text-xl text-accent hover:scale-105 transition duration-150">
                  brs.transport@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
