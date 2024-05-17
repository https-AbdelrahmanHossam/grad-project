import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <section className="max-container padding-container m-[96px] rounded-2xl bg-white py-3 lg:relative lg:grid  lg:grid-cols-2 xl:w-[80%] 3xl:w-[60%]">
      <div className="hidden lg:absolute lg:-right-5 lg:block 3xl:-right-64 3xl:w-[60%]">
        <img src="/newsletter_element.svg" alt="" />
      </div>
      <div className="mb-6">
        <span className="mb-3 inline-block rounded-full bg-navy-blue/15 px-5 py-1 text-[10px] font-bold text-navy-blue md:text-[12px] lg:text-[14px]">
          Our Newsletter
          <img
            src="/newsletter_icon.png"
            alt="hero_travel"
            width={15}
            height={15}
            className="ml-2 inline"
          />
        </span>
        <p className="mb-[10px] text-[28px] font-bold text-navy-blue xs:text-[32px] lg:w-[70%] lg:text-[36px]">
          Subscribe our
          <span className="text-light-orange underline"> Newsletter</span>
          &nbsp; now!
        </p>
        <p className="text-[18px] text-heavy-gray">
          For latest updates & Promotions
        </p>
      </div>
      <div className="flex flex-col place-content-center gap-7">
        <form action="" className="relative inline-block">
          <input
            type="email"
            id="email"
            name="email"
            className="relative h-[100%] w-full rounded-[500px] border border-light-orange px-[15px] py-[23px]"
            placeholder="Enter your mail here"
          />
          <Button type="button" title="Subscribe" variant="btn_newsletter_xs" />
        </form>

        <Button type="button" title="Subscribe" variant="btn_newsletter_sm" />
      </div>
    </section>
  );
};

export default Newsletter;
