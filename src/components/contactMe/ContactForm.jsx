import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kpchtdm", "template_wglz9s5", form.current, {
        publicKey: "YyUA0zW3xfGRIhkGD",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        className="flex flex-col gap-4 text-white "
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={handleName}
          className="h-12 rounded-lg bg-lightGrey px-2"
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={handleEmail}
          className="h-12 rounded-lg bg-lightGrey px-2 "
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={9}
          cols={50}
          required
          value={message}
          onChange={handleMessage}
          className="rounded-lg bg-lightGrey p-2"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 "
        >
          Send
        </button>
      </form>
    </div>
  );
};
