"use client";

import { assessmentStore } from "@/zustand/store/store";
import { DatePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Page() {
  const router = useRouter();
  const { formVals, setFormVals, setProtocol } = assessmentStore(
    (state) => state
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!Object.values(formVals).some((val) => val.toString().length < 1)) {
      router.push("/join/short_assessment");
      setProtocol("assessment");
    }
  }

  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" },
  ];

  return (
    <div className="">
      <p className="text-2xl">Please fill in your information</p>
      <p className="text-sm mt-3">
        {`At CoinReach, we prioritize the privacy and security of our users' data.
        We understand that your personal information is valuable and sensitive,
        and we are committed to protecting it with the highest level of care.
        All fields are required.`}
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e2b31] text-white grid gap-8 px-4 py-6 md:px-8 md:py-10 mt-5 rounded-sm shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div className="grid gap-1">
            <label htmlFor="first_name" className="text-lg font-medium">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
              onChange={(e) => setFormVals(e.target.name, e.target.value)}
              value={formVals["first_name"]}
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="last_name" className="text-lg font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
              onChange={(e) => setFormVals(e.target.name, e.target.value)}
              value={formVals["last_name"]}
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div className="grid gap-1">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
              onChange={(e) => setFormVals(e.target.name, e.target.value)}
              value={formVals["email"]}
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="phone" className="text-lg font-medium">
              Phone Number
            </label>
            <div className="flex items-center gap-2 border border-[#e0e3e197] rounded-sm p-3">
              <p className="">+1</p>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full bg-transparent outline-none focus:border-white"
                onChange={(e) => setFormVals(e.target.name, e.target.value)}
                value={formVals["phone"] === 0 ? "" : formVals["phone"]}
                required
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div className="grid gap-1">
            <label htmlFor="first_name" className="text-lg font-medium ">
              Date of Birth (dd/mm/yyyy)
            </label>
            <DatePicker
              showMonthAndYearPickers
              name="Date of birth"
              aria-label="Date of birth"
              dateInputClassNames={{
                inputWrapper:
                  "bg-[#1e2b31] rounded-sm py-6 border border-[#e0e3e197] hover:bg-[#1e2b31] focus-within:hover:bg-[#1e2b31] focus-within:border-white text-white",
                innerWrapper: "text-white",
                input: "*:!text-white",
              }}
              value={parseDate(
                `${formVals.DOB.year}-${
                  formVals.DOB.month.length < 2 ? "0" : ""
                }${formVals.DOB.month}-${
                  formVals.DOB.day.length < 2 ? "0" : ""
                }${formVals.DOB.day}`
              )}
              onChange={(value) => {
                setFormVals("DOB", {
                  day: value.day.toString(),
                  month: value.month.toString(),
                  year:
                    value.year.toString().length === 4
                      ? value.year.toString()
                      : formVals.DOB.year,
                });
              }}
              isRequired
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="gender" className="text-lg font-medium">
              Gender
            </label>
            <Select
              aria-label="Select Gender"
              name="gender"
              className="w-full"
              classNames={{
                trigger:
                  "bg-[#1e2b31] border border-[#e0e3e197] rounded-sm py-6 hover:!bg-[#1e2b31] focus:border-white",
                innerWrapper: "*:text-white",
                value: "!text-white",
              }}
              selectedKeys={new Set([formVals.gender])}
              onSelectionChange={(e) => setFormVals("gender", Array.from(e)[0])}
              isRequired
              placeholder="Select Gender"
            >
              {genders.map((gender) => (
                <SelectItem key={gender.value}>{gender.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div className="grid gap-1">
            <label htmlFor="nationality" className="text-lg font-medium">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
              onChange={(e) => setFormVals(e.target.name, e.target.value)}
              value={formVals.nationality}
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="right_to_work" className="text-lg font-medium">
              Do you have right to work in the US?
            </label>
            <input
              type="text"
              id="right_to_work"
              name="right_to_work"
              className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
              onChange={(e) => setFormVals(e.target.name, e.target.value)}
              value={formVals.right_to_work}
              required
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label htmlFor="experience" className="text-lg font-medium">
            What are your most recent job titles?
          </label>
          <textarea
            rows={8}
            id="experience"
            name="experience"
            className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
            onChange={(e) => setFormVals(e.target.name, e.target.value)}
            value={formVals.experience}
            required
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="reason_for_joining" className="text-lg font-medium">
            Why do you want to work with us?
          </label>
          <textarea
            rows={8}
            id="reason_for_joining"
            name="reason_for_joining"
            className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
            onChange={(e) => setFormVals(e.target.name, e.target.value)}
            value={formVals.reason_for_joining}
            required
          />
        </div>
        <p className="text-sm">
          By submitting this form, I declare that the information provided is
          true and accurate to the best of my knowledge. I understand that any
          false or misleading information may result in my application being
          rejected or my employment being terminated.
        </p>
        <button
          type="submit"
          className="text-center bg-white text-gray-700 p-3 font-medium hover:bg-transparent border border-transparent hover:border-[#e0e3e197] hover:text-white"
        >
          Continue to Assessment
        </button>
      </form>
    </div>
  );
}
