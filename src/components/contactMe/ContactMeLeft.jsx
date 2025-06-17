import React from "react";
import { ContactForm } from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div>
        <h2 className="text-orange text-3xl mb-4 text-center lg:text-left">
          Get in Touch
        </h2>
        <p className="text-white text-center lg:text-left">
          Feel free to reach out if you'd like to collaborate <br />
          you are just a few clicks away
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
