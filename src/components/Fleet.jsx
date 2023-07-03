import React from "react";
import logan1 from "../assets/fleet/logan1.jpg";
import logan2 from "../assets/fleet/logan2.jpg";
import logan3 from "../assets/fleet/logan3.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const cars = [
  {
    brand: "Dacia Sandero Stepway 0.9 TCE",
    year: "2015",
    price: "450",
    img: logan3,
  },
  {
    brand: "Dacia Sandero Stepway 0.9 TCE",
    year: "2015",
    price: "450",
    img: logan2,
  },
  {
    brand: "Dacia Logan MCV 1.0",
    year: "2018",
    price: "500",
    img: logan1,
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="h-full bg-[#f1f1f1] py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl">
            Flota noastra
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg tracking-wide text-tertiary">
            Oferim spre inchiriere
          </motion.p>
        </div>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {cars.map((car, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              className="flex flex-col justify-center items-center rounded-md shadow bg-white  py-6">
              <div>
                <img src={car.img} alt="" />
              </div>
              <div className="pt-20 text-center">
                <p className="text-lg text-secondary font-semibold pb-2">{car.brand}</p>
                <p className="text-tertiary tracking-wide pb-1">
                  Anul fabricatiei - <span className="text-secondary font-semibold ">{car.year}</span>
                </p>
                <p className="text-tertiary tracking-wide pb-6">
                  Pret - <span className="font-semibold text-secondary">{car.price} ron / saptamana</span>
                </p>
                <a href="#contact" className="btn mt-4">
                  Rezerva acum
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
