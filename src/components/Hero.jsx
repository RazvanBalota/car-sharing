import React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="h-screen lg:pt-64 flex items-center lg:items-start herobg">
      <div className="container mx-auto">
        <div>
          <h2>RIDE SHARING ORADEA</h2>
          <h1 className="text-4xl text-primary font-semibold pb-4">
            Firma autorizata ARR afiliata companiilor de Ride-Sharing
          </h1>
          <p className="text-primary text-xl tracking-wide pb-6">Alatura-te echipe noastre acum!</p>
          <Link to="fleet" offset={-70} className="text-xl btn cursor-pointer">
            Flota noastra
          </Link>
        </div>
      </div>
    </section>
  );
}
