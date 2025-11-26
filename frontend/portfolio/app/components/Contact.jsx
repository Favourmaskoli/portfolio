import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5d1dec60-5c87-4ef9-801f-d1b122d97e5c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className={
        "flex w-full scroll-mt-20 flex-col bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] bg-center bg-no-repeat px-[12%] py-10"
      }
    >
      <h4 className="font-Ovo mb-2 text-center text-lg">Connect with me</h4>
      <h2 className="font-Ovo text-center text-5xl">Get in touch</h2>

      <p className="font-Ovo mx-auto mt-5 mb-12 max-w-2xl text-center text-gray-700">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="mx-auto max-w-2xl">
        <div className="grid-cols-2 my-10 grid gap-5">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none"
            name="email"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Enter Your message"
          required
          className="mb-6 w-full rounded-md border-[0.5px] border-gray-400 bg-white p-4 outline-none"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          {" "}
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4"> {result}</p>
      </form>
    </div>
  );
};

export default Contact;
