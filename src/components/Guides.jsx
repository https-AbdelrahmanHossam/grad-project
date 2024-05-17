import React from "react";
import Button from "./Button";
import { GUIDES } from "../../constants";

const Guides = () => {
  return (
    <div className="mt-[60px] grid cursor-pointer gap-10 space-y-16 xs:grid-cols-2 xs:space-y-0 lg:grid-cols-4">
      {GUIDES.map((guide) => (
        <div
          key={guide.key}
          className="rounded-xl bg-white px-2 py-3 duration-300 ease-in-out hover:shadow-lg"
        >
          <div className="h-[210px]">
            <img
              src={guide.img}
              alt="guide_X"
              className="h-[100%] w-[100%] rounded-lg object-cover"
            />
          </div>
          <div className="mt-2 place-content-center">
            <div className="flex justify-between">
              <h2 className="cursor-pointer text-[24px] font-bold uppercase text-navy-blue-dark duration-300 ease-in-out hover:text-light-orange">
                {guide.name}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-navy-blue">{guide.jop}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Guides;
