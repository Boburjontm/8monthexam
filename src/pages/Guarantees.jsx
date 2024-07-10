import React from "react";
import Garanti from "../components/Warranty/Garanti";
import Services from "../components/Warranty/Services";
import Attention from "../components/Warranty/Attention";
import Location from "../components/HomeComp/Location";
import Consultation from "../components/DostavkaComp/Consultation";

const Guarantees = () => {
  return (
    <>
      <div className="w-full container mx-auto">
        <div className="w-[1310px] m-auto">
          <Garanti />
          <Services />
          <Attention />
          <div className="mb-[150px]">
            <Consultation />
            <Location />
          </div>
        </div>
      </div>
    </>
  );
};

export default Guarantees;
