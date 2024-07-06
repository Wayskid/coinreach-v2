"use client";

import { AuthContext } from "@/context/authContext";
import { db } from "@/firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";

export type Task = {
  amount: number;
  type: string;
  wage: number;
};

export default function Page() {
  const { token } = useContext(AuthContext);
  const [taskVal, setTaskVal] = useState<Task>({
    amount: 0,
    type: "",
    wage: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleAddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSuccess(false);
    if (
      !Object.values(taskVal).some((task) => task.toString().length < 1) &&
      token
    ) {
      setIsLoading(true);
      try {
        const userTaskRef = doc(db, "users", token);
        await updateDoc(userTaskRef, { tasks_list: arrayUnion(taskVal) });
        setIsLoading(false);
        setTaskVal({
          amount: 0,
          type: "",
          wage: 0,
        });
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } catch (e) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="">
      <p className="text-2xl">Add a Task</p>
      <p className="text-sm mt-3">
        Please take a moment to log and track the tasks you have completed,
        ensuring accurate records of your accomplishments and progress. This
        will enable efficient tracking of project milestones, effective
        evaluation of individual performance, and informed decision-making.
      </p>
      <form
        onSubmit={handleAddTask}
        className="bg-[#1e2b31] text-white grid gap-8 px-4 py-6 md:px-8 md:py-10 mt-5 rounded-sm shadow-lg"
      >
        <div className="grid gap-1">
          <label htmlFor="type" className="text-lg font-medium">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
            onChange={(e) => setTaskVal({ ...taskVal, type: e.target.value })}
            value={taskVal.type}
            required
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="amount" className="text-lg font-medium">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
            onChange={(e) =>
              setTaskVal({ ...taskVal, amount: +e.target.value })
            }
            value={taskVal.amount === 0 ? "" : taskVal.amount}
            required
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="wage" className="text-lg font-medium">
            Wage
          </label>
          <input
            type="number"
            id="wage"
            name="wage"
            className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
            onChange={(e) => setTaskVal({ ...taskVal, wage: +e.target.value })}
            value={taskVal.wage === 0 ? "" : taskVal.wage}
            required
          />
        </div>
        {isSuccess && <p className="text-green-600">Task has been added</p>}
        <button
          type="submit"
          className="text-center bg-white text-gray-700 p-3 font-medium hover:bg-transparent border border-transparent hover:border-[#e0e3e197] hover:text-white disabled:opacity-60"
          disabled={isLoading}
        >
          {isLoading ? "Adding" : "Add task"}
        </button>
      </form>
    </div>
  );
}
