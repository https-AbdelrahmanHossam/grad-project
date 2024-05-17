import React from "react";
import { BENEFITS } from "../../constants";

const Benefits = () => {
  return (
    <section className="max-container padding-container m-[96px] ">
      <h1 className="mx-auto text-center text-[28px] font-bold text-navy-blue sm:text-[32px] md:w-[80%] lg:text-[36px] xl:w-[50%]">
        We always focus on best
        <span className="text-light-orange"> Benefits </span> as well as
        <span className="text-heavy-gray underline"> Professional </span>
        Services
      </h1>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((item) => (
          <div
            key={item.key}
            className="flex flex-col items-center justify-center text-center"
          >
            <img
              src={item.img}
              alt="benefits"
              className="h-[105] w-[109px] lg:h-[106px] lg:w-[107px]"
            />
            <h2 className="mb-[20px] mt-[35px] text-[24px] font-bold text-navy-blue">
              {item.label}
            </h2>
            <p className="mb-[33px] text-[18px] font-light leading-[1.67rem] text-navy-blue xl:w-[70%]">
              {item.p}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
