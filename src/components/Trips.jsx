import React from "react";
import Button from "./Button";
import { DESTINATIONS } from "../../constants";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Trips = () => {
  return (
    <div className="mt-[60px] grid cursor-pointer gap-10 space-y-16 xs:grid-cols-2 xs:space-y-0 lg:grid-cols-4">
      {DESTINATIONS.slice(0, 4).map((dest) => (
        <div
          key={dest.key}
          className="rounded-xl bg-white px-2 py-3 duration-300 ease-in-out hover:shadow-lg"
        >
          <div className="h-[210px]">
            <img
              src={dest.img}
              alt="trip_img_X"
              className="h-[100%] w-[100%] rounded-lg object-cover"
            />
          </div>
          <div className="mt-2 place-content-center">
            <div className="flex justify-between">
              <h2 className="cursor-pointer text-[24px] font-bold uppercase text-navy-blue-dark duration-300 ease-in-out hover:text-light-orange">
                {dest.label}
              </h2>
              <div className="flex items-center gap-1 ">
                <FaStar color="#ff9933" size={12} />
                <p className="text-sm text-heavy-gray">4.8</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn color="#394867" size={14} />
              <p className="text-sm text-navy-blue">{dest.loc}</p>
            </div>
            <div className="mt-[20px] flex items-center justify-between gap-1">
              <p className="text-sm text-navy-blue">
                <span className="text-lg font-bold text-navy-blue">
                  &pound;
                  {dest.price}
                </span>
                person
              </p>
              <Button type="button" title="Book" variant="btn_destination" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trips;
