import React from "react";
import aboutimg from "../assets/aboutimg.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  return (
    <section id="about" className=" bg-about aboutbg lg:bg-fixed">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  ">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-1">
            <img src={aboutimg} alt="" className="rounded-md max-w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-1">
            <div>
              <p className="uppercase text-lg font-secondary pt-4">Cine suntem noi</p>
              <p className="font-semibold tracking-wide text-3xl pt-2 lg:pt-4">
                Firma autorizata ARR afiliata companiilor de ride-sharing precum Uber si Bolt
              </p>
              <p className="pt-6 text-lg tracking-wide pb-6">
                Va oferim posibilitatea unei colaborari de incredere pe termen lung (full-time/part-time) in Oradea!
              </p>
              <a href="#contact" className="btn">
                Contacteaza-ne acum
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
