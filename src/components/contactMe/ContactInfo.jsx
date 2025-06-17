import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="Oluyoleprovidence@gmail.com" Image={AiOutlineMail} />
      <SingleInfo text="+234-8141117389" Image={FiPhoneCall} />
      <SingleInfo text="Lagos, Nigeria" Image={SlLocationPin} />
    </div>
  );
};

export default ContactInfo;
