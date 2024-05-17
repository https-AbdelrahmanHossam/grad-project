import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <section className="relative py-[185px]  text-center">
      <div className="max-container padding-container">
        <span className="mb-3 inline-block rounded-full bg-navy-blue/15 px-5 py-1 text-[10px] font-bold text-navy-blue md:text-[12px] lg:text-[14px]">
          {subtitle}
          {/* <img
              src="../../public/hero_travel.png"
              alt="hero_travel"
              width={20}
              height={20}
              className="inline ml-2"
            /> */}
        </span>
        <h1 className="mb-[15px] text-[42px] font-extrabold text-navy-blue md:text-[48px] lg:text-[52px] xl:text-[60px]">
          {title}
        </h1>
        <p className="mx-auto text-lg text-navy-blue xs:w-[70%] xl:w-[40%]">
          Trippy is one of the most popular Travel agency for those who want to
          explore the world and try to make adventure
        </p>
        <div>
          <img
            src="/header_element.svg"
            alt="header_element"
            className="absolute -bottom-0 -right-0 max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
