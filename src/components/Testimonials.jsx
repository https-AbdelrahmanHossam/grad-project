import React from "react";

const Testimonials = () => {
  return (
    <section className="max-container padding-container m-[96px]  md:grid md:grid-cols-2">
      <div className="order-2 place-content-center xl:w-[80%]">
        <span className="mb-3 inline-block rounded-full bg-navy-blue/15 px-5 py-1 text-[10px] font-bold text-navy-blue md:text-[12px] lg:text-[14px]">
          Our Testimonials
          <img
            src="/testimonials_i.png"
            alt="hero_travel"
            width={20}
            height={20}
            className="ml-2 inline"
          />
        </span>
        <p className="mb-[40px]  text-[28px] font-bold text-navy-blue xs:w-[70%] xs:text-[32px] xl:text-[36px]">
          Happy <span className="text-light-orange">Trippers </span>
          <span className="text-heavy-gray">expression</span>
        </p>
        <div className="bg-[url('/testimonial_quote_icon.svg')] bg-no-repeat pt-[40px]">
          <p className="mb-[25px]  font-medium text-navy-blue lg:w-[80%] xl:text-[18px]">
            Trippy is one of the most popular Travel agency for those who want
            to explore egypt and try to make adventure as well as can provide.
          </p>
          <div>
            <p className="mb-[5px] text-[18px] font-bold text-navy-blue-dark">
              Jhon Smith
            </p>
            <p className="text-sm tracking-[0.4px] text-heavy-gray">
              CEO, Egypt
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-auto w-[70%] lg:order-1 lg:w-[70%] 2xl:w-[50%]">
        <img src="/testimonials_img.png" alt="hero_img" />
      </div>
    </section>
  );
};

export default Testimonials;
