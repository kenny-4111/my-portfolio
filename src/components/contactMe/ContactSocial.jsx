import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        Icon={FiGithub}
        Link="https://github.com/kenny-4111"
      />
      <SingleContactSocial
        Icon={FaLinkedinIn}
        Link="https://www.linkedin.com/in/oluyole-providence-3913a9355/"
      />
      <SingleContactSocial
        Icon={FaInstagram}
        Link="https://www.instagram.com/kenprovi/"
      />
    </div>
  );
};

export default ContactSocial;
