import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto px-4 mt-[100px] items-center justify-center md:flex-row gap-16 md:gap-24"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl flex-col lg:flex-row w-full">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMain;
