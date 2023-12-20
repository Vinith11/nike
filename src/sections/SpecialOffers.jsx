import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

function SpecialOffers() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1" width={773} height={687} >
        <img src={offer} alt="" className="object-contain w-full" /> 
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero nobis incidunt, dolore nesciunt quibusdam consectetur natus aliquid ex illo, a eum repellendus veritatis maxime nemo quidem possimus, atque harum!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero nobis incidunt, dolore nesciunt quibusdam consectetur natus aliquid ex illo,
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="tetx-slate-gray"/>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
