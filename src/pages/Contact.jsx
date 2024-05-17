import React from "react";
import Header from "../components/Header";
import { CONTACT } from "../../constants";
import Newsletter from "../components/Newsletter";

const Contact = () => {
  return (
    <>
      {/* first section */}
      <Header title="Get Connected" subtitle="Contact" />

      {/* second section */}
      <section className="max-container padding-container mb-[200px] mt-[30px]">
        <div className="gap-10 md:grid md:grid-cols-2">
          <div>
            <div className="mb-16">
              <span className="mb-3 inline-block px-1 py-1 text-base font-semibold text-light-orange">
                Contact info
              </span>
              <h1 className="mb-4 text-[28px] font-bold leading-tight text-navy-blue xs:text-[32px] md:text-[36px]">
                Get in touch
              </h1>
              <p className=" text-[16px]  text-navy-blue md:text-[18px] lg:w-full">
                We'll love to hear from you. Our friendly team is always here to
                chat
              </p>
            </div>
            {CONTACT.map((tact) => (
              <div className="mt-8 flex gap-5 " key={tact.key}>
                <div>
                  <img src={tact.icon} alt="contact_img" />
                </div>
                <div>
                  <h2 className="text-[24px]  font-bold text-navy-blue-dark">
                    {tact.label}
                  </h2>
                  <p className="text-navy-blue">{tact.p}</p>
                  <p className="text-[18px] font-semibold text-navy-blue">
                    {tact.pp}
                  </p>
                  <p className="text-[18px] font-semibold text-navy-blue">
                    {tact.num}
                  </p>
                  <p className="text-[18px] font-semibold text-navy-blue">
                    {tact.num2}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col md:mt-0">
            <form action="" method="POST">
              <p className="mb-[50px] text-2xl font-semibold text-navy-blue">
                Leave a comment
              </p>
              <div className="flex flex-col gap-4 xl:flex-row">
                <input
                  type="text"
                  className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
                  placeholder="Name*"
                  required
                />
                <input
                  type="email"
                  className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
                  placeholder="Email*"
                  required
                />
              </div>

              <div className="mt-4 flex flex-col gap-4 xl:flex-row">
                <input
                  type="tel"
                  className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
                  placeholder="Phone*"
                  required
                />
                <input
                  type="text"
                  className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
                  placeholder="Subject*"
                  required
                />
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <textarea
                  type="tel"
                  className="h-[281px] rounded-[16px] border border-navy-blue px-[20px] py-[12px] xl:w-[540px]"
                  placeholder="Write here"
                  required
                  maxLength="5000"
                />
              </div>

              <div className="mt-4">
                <input
                  type="submit"
                  className="rounded-[200px] bg-light-orange px-[20px] py-[7px] font-bold text-white"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* third section */}
      <Newsletter />
    </>
  );
};

export default Contact;
