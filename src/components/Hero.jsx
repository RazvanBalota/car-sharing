import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Hero() {
  return (
    <section id="home" className="h-screen lg:pt-64 flex items-center lg:items-start herobg lg:bg-fixed">
      <div className="container mx-auto">
        <div>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}>
            RIDE SHARING ORADEA
          </motion.h2>
          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-4xl text-primary font-semibold pb-4">
            Firma autorizata ARR afiliata companiilor de Ride-Sharing
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-primary text-xl tracking-wide pb-6">
            Alatura-te echipe noastre acum!
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.8, 1.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}>
            <Link to="fleet" offset={-70} className="text-xl btn cursor-pointer">
              Flota noastra
            </Link>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
