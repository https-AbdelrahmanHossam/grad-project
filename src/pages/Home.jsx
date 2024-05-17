import React from "react";
import Button from "../components/Button";

import Trips from "../components/Trips";
import Newsletter from "../components/Newsletter";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      {/* first section */}
      <section className="max-container padding-container mt-20 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className=" mx-auto w-[70%] md:w-[40%] lg:order-2 lg:w-full">
          <img src="/hero_img.png" alt="hero_img" />
        </div>
        <div className="col-span-2 md:px-14 lg:px-0 ">
          <span className="mb-3 inline-block rounded-full bg-navy-blue/15 px-5 py-1 text-[10px] font-bold text-navy-blue md:text-[12px] lg:text-[14px]">
            Explore the Seven Wonders of Egypt
            <img
              src="/hero_travel.png"
              alt="hero_travel"
              width={20}
              height={20}
              className="ml-2 inline"
            />
          </span>
          <h1 className="mb-4 text-[40px] font-extrabold leading-tight text-navy-blue sm:text-[46px] md:text-[54px] lg:text-[60px] ">
            Let's find your
            <span className="block">
              Dream <span className="text-light-orange">Destination</span>
            </span>
            make with joy
          </h1>
          <p className="w-[80%] text-[16px] font-light text-navy-blue md:text-[18px] lg:w-full">
            Trippy is one of the most popular Travel agency for those who want
            to explore Egypt and try to make adventure.
          </p>
          <div className="relative">
            <img
              src="/hero_element.svg"
              alt="hero_element"
              className="absolute -bottom-10 -left-16 -z-20  xs:-bottom-20 xs:-left-[72px] md:-bottom-28 md:-left-[110px] 2xl:-left-[140px] 3xl:-bottom-36 3xl:-left-[450px]"
            />
            <Button type="button" title="Plan a trip" variant="btn_hero" />
          </div>
        </div>
      </section>

      {/* second section */}
      <Benefits />

      {/* third section */}
      <section className="max-container padding-container m-[96px]">
        <div className="flex flex-col md:flex-row xl:gap-32">
          <div className="">
            <span className="mb-3 inline-block rounded-full bg-navy-blue/15 px-5 py-1 text-[10px] font-bold text-navy-blue md:text-[12px] lg:text-[14px]">
              Most Attractive
              <img
                src="/attractive_location.png"
                alt="hero_travel"
                className="ml-2 inline"
              />
            </span>
            <h1 className="text-[28px] font-bold text-navy-blue xs:w-[70%] sm:text-[32px] md:w-[100%] lg:text-[36px]">
              Popular<span className="text-light-orange"> Destination </span>we
              offer for all
            </h1>
          </div>
          <div className="place-content-center">
            <p className="mt-3 text-[18px] font-medium text-navy-blue">
              <span className="text-[18px] font-semibold text-heavy-gray">
                14+
              </span>
              Destinations
            </p>
            <p className="mt-3 border-l border-navy-blue pl-2 text-[16px] text-navy-blue xl:w-[90%]">
              Trippy is one of the most popular Travel agency for those who want
              to explore the wonders of egypt and try to make adventure.
            </p>
          </div>
        </div>
        <Trips />
      </section>

      {/* fourth section */}
      <Testimonials />

      {/* fifth section */}
      <Newsletter />
      {/* sixth section */}
      <section className="relative mt-28 h-[366.59px] bg-[url('/hero_bg.jpg')] bg-cover bg-center text-center text-navy-blue-dark">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-off-white to-offwhite-opacity/5 pt-20 ">
          <div className="max-container padding-container space-y-4">
            <h2 className="mx-auto text-3xl font-medium xs:w-[70%] md:w-full md:text-5xl">
              Corporate & School
              <span className="font-extrabold text-light-orange"> Trips</span>
            </h2>
            <p className="text-sm font-bold text-navy-blue md:text-[16px]">
              Looking to organize a trip for your entity? We'll accommodate all
              your requests
            </p>
            <div className="">
              <Button type="button" title="Contact Us" variant="btn_contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
