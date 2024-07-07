"use client";

import { db } from "@/firebase/firebase";
import { assessmentStore } from "@/zustand/store/store";
import { FaCheck } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { assessments, formVals, setUserScore, setProtocol, clearAssessment } =
    assessmentStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmitApplication() {
    if (!assessments.some((assessment) => assessment.user_choice.length < 1)) {
      setIsLoading(true);
      const applicationForm = {
        formVals: {
          ...formVals,
          DOB: { ...formVals.DOB, age: 2024 - +formVals.DOB.year },
        },
        assessments,
        score:
          (
            (assessments.reduce((a, c) => a + c.user_score, 0) / 7) *
            100
          ).toFixed(1) + "%",
      };

      try {
        await addDoc(collection(db, "Application Forms"), applicationForm);
        setIsLoading(false);
        setProtocol("success");
        clearAssessment();
        router.push("/join/form_success");
      } catch (e) {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="">
      <p className="text-2xl">Please complete this short assessment</p>
      <p className="mt-3 text-sm">
        This assessment is designed to gather your thoughts and opinions on
        everything related to working as a conversion specialist. Please note
        that there are no right or wrong answers, and we encourage you to share
        your honest perspectives and thoughts. Your responses will help us
        better understand your mindset and approach to this job role.
      </p>
      <div className="bg-[#1e2b31] text-white grid gap-10 px-4 py-6 md:px-8 md:py-10 mt-5 rounded-sm shadow-lg">
        {assessments.map((assessment) => (
          <div className="" key={assessment.id}>
            <p className="font-medium">
              <span className="mr-4">{assessment.id}.</span>
              {assessment.qstn}
            </p>
            <ul className="mt-4 grid gap-4 pl-7">
              {assessment.options.map((opt) => (
                <li className="grid font-light cursor-pointer" key={opt.id}>
                  <label
                    htmlFor={opt.id}
                    className="flex items-center cursor-pointer gap-3"
                  >
                    <input
                      type="radio"
                      name={assessment.id.toString()}
                      id={opt.id}
                      className="hidden peer"
                      checked={assessment.user_choice === opt.id}
                      value={opt.id}
                      onChange={() => setUserScore(assessment.id, opt.id)}
                    />
                    <div className="w-5 h-5 rounded-sm border border-gray-400 shrink-0 grid place-items-center *:hidden *:peer-checked:block">
                      <FaCheck className="text-sm text-[#F9CC0B]" />
                    </div>
                    <span>{opt.option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={handleSubmitApplication}
          className="disabled:opacity-60 text-center bg-white text-gray-700 p-3 font-medium hover:bg-transparent border border-transparent hover:border-gray-400 hover:text-white"
          disabled={
            isLoading ||
            assessments.some((assessment) => assessment.user_choice.length < 1)
          }
        >
          {isLoading ? "Submitting..." : "Submit application"}
        </button>
      </div>
    </div>
  );
}
