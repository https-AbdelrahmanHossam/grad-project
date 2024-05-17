import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Guides from "../components/Guides";

const About = () => {
  return (
    <>
      {/* first section */}
      <Header title="About us" subtitle="Explore Egypt" />

      {/* second section */}
      <section className="max-container padding-container mb-48 mt-40 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className=" mx-auto w-[70%] md:w-[40%] lg:order-2 lg:w-full">
          <img src="/bg_about.png" alt="hero_img" />
        </div>
        <div className="col-span-2 md:px-14 lg:px-0 ">
          <span className="mb-3 inline-block rounded-full bg-navy-blue/15 px-5 py-1 text-[10px] font-bold text-navy-blue md:text-[12px] lg:text-[14px]">
            Welcome to Trippy
            <img
              src="public/hero_travel.png"
              alt="hero_travel"
              width={20}
              height={20}
              className="ml-2 inline"
            />
          </span>
          <h1 className="mb-4 text-[40px] font-extrabold leading-tight text-navy-blue sm:text-[46px] md:text-[54px] lg:text-[60px] ">
            We Recommend Beautiful
            <span className="block text-light-orange"> Destination </span>
            every month
          </h1>
          <p className="w-[80%] text-[16px] font-light text-navy-blue md:text-[18px] lg:w-full">
            Trippy is one of the most popular Travel agency for those who want
            to explore the wold and try to make adventure as well as we can
            provide beautiful destination around the world and make you trip
          </p>
          <div className="relative">
            <img
              src="../../public/hero_element.svg"
              alt="hero_element"
              className="absolute -bottom-10 -left-16 -z-20  xs:-bottom-20 xs:-left-[72px] md:-bottom-28 md:-left-[110px] 2xl:-left-[140px] 3xl:-bottom-36 3xl:-left-[450px]"
            />
            <Button type="button" title="Learn More" variant="btn_hero" />
          </div>
        </div>
      </section>

      {/* third section */}
      <Benefits />

      {/* third section */}
      <section className="max-container padding-container m-[150px] mb-48">
        <div className="flex flex-col md:flex-row xl:gap-32">
          <div className="">
            <span className="mb-3 inline-block rounded-full bg-navy-blue/15 px-5 py-1 text-[10px] font-bold text-navy-blue md:text-[12px] lg:text-[14px]">
              Travel guide
              <img
                src="/attractive_location.png"
                alt="hero_travel"
                className="ml-2 inline"
              />
            </span>
            <h1 className="text-[28px] font-bold text-navy-blue xs:w-[70%] sm:text-[32px] md:w-[100%] lg:text-[36px]">
              Meet our<span className="text-light-orange"> Dedicated </span>
              Team
            </h1>
          </div>
          <div className="place-content-center">
            <p className="mt-3 border-l border-navy-blue pl-2 text-[16px] text-navy-blue xl:w-[70%]">
              Trippy is one of the most popular Travel agency for those who want
              to explore the wonders of egypt and try to make adventure.
            </p>
          </div>
        </div>
        <Guides />
      </section>

      {/*fourth section */}
      <Testimonials />
    </>
  );
};

export default About;
