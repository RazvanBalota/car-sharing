import React from "react";
import rentacar from "../assets/services/rentacar.jpg";
import application from "../assets/services/application.jpg";
import certificate from "../assets/services/certificate.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    img: rentacar,
    title: "Inchiriere masina",
    description: "Daca nu detii un autoturism poti inchiria unul de la noi.",
  },
  {
    img: application,
    title: "Administrare conturi",
    description: "Asistenta in crearea si administrarea conturilor de Bolt si Uber.",
  },
  {
    img: certificate,
    title: "Autorizare",
    description: "Asistenta in obtinerea actelor necesare cat mai rapid.",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="h-full pb-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center py-8">
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="pb-0 text-3xl">
              Serviciile noastre
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-tertiary tracking-wide">
              Iti suntem alaturi la fiecare pas
            </motion.p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {services.map((item, index) => (
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                key={index}
                className="flex flex-col flex-1 card-shadow pb-8 ">
                <div>
                  <img src={item.img} alt="" className="h-[300px] w-full" />
                </div>
                <div className="px-6 pt-6">
                  <h2 className="pb-2">{item.title}</h2>
                  <p className="text-tertiary leading-6 tracking-wide pb-8">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
