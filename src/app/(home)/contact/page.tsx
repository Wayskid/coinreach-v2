"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import emailjs from "@emailjs/browser";

export default function Page() {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactVal, setContactVal] = useState({
    name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  function handleInputs(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setContactVal({ ...contactVal, [e.target.name]: e.target.value });
  }

  function handleContactUs(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (Object.values(contactVal).every((val) => val.length > 0)) {
      emailjs
        .send(
          "service_ghlo75w",
          "template_5a1y7ep",
          {
            ...contactVal,
          },
          "GS9cjuP3bn-M_b_R5"
        )
        .then(
          (result) => {
            console.log(result);
            setContactSuccess(true);
            setLoading(false);
            setContactVal({
              name: "",
              phone_number: "",
              email: "",
              message: "",
            });
            setTimeout(() => {
              setContactSuccess(false);
            }, 10000);
          },
          (error) => {
            setLoading(false);
          }
        );
    }
  }

  return (
    <section className="bg-White">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pb-16 pt-10 grid md:grid-cols-[1fr,1.5fr] gap-5 items-center">
        <div className="">
          <p className="text-3xl">Contact us</p>
          <p className="mt-2">
            Uncertain about your needs? Don't worry! The CoinReach team is here
            to listen and offer expert guidance, providing personalized support
            to help you find what you're looking for.
          </p>
          <div className="grid gap-2 mt-4">
            <div className="flex items-center gap-2">
              <IoIosMail className="text-xl" />
              <p className="">info@coinreach.com</p>
            </div>
            {/* <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p className="">Support +1</p>
            </div> */}
          </div>
        </div>
        <div className="bg-[#1e2b31] rounded-sm text-white p-7">
          <p className="text-2xl">
            Inquire Today: <br /> Let's explore how we can help
          </p>
          <form className="pt-5 grid" onSubmit={handleContactUs}>
            <div className="space-y-5 grid justify-items-center">
              <div className="grid w-full">
                <label htmlFor="name" className="text-lg">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="border border-gray-400 outline-none text-lg bg-transparent placeholder:text-white placeholder:italic placeholder:font-normal focus:placeholder:text-transparent placeholder:transition-all p-2 focus:border-Orange rounded-sm w-full"
                  onChange={handleInputs}
                  value={contactVal.name}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                <div className="grid w-full">
                  <label htmlFor="phone" className="text-lg">
                    Phone Number
                  </label>
                  <div className="border border-gray-400 p-2 flex items-center focus-within:border-Orange">
                    <p className="text-lg">+1</p>
                    <input
                      type="number"
                      id="phone_number"
                      name="phone_number"
                      className="outline-none text-lg bg-transparent placeholder:text-white placeholder:italic placeholder:font-normal focus:placeholder:text-transparent placeholder:transition-all px-2 md:px-3 rounded-sm w-full"
                      onChange={handleInputs}
                      value={contactVal.phone_number}
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
                <div className="grid w-full">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-400 outline-none text-lg bg-transparent placeholder:text-white placeholder:italic placeholder:font-normal focus:placeholder:text-transparent placeholder:transition-all p-2 focus:border-Orange rounded-sm w-full"
                    onChange={handleInputs}
                    value={contactVal.email}
                    required
                  />
                </div>
              </div>
              <div className="grid w-full">
                <label htmlFor="message" className="text-lg">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="border border-gray-400 outline-none text-lg bg-transparent placeholder:text-white placeholder:italic placeholder:font-normal focus:placeholder:text-transparent placeholder:transition-all p-2 focus:border-Orange rounded-sm w-full"
                  onChange={handleInputs}
                  value={contactVal.message}
                  required
                />
              </div>
            </div>
            {contactSuccess && (
              <p className="mt-5 text-green-400">
                Your message has been sent to us. We will respond as quickly as
                possible
              </p>
            )}
            <button
              className="bg-[#F9CC0B] border border-[#F9CC0B] rounded-sm text-gray-800
              transition mt-9 disabled:opacity-60 sm:mr-auto py-2 px-10"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
