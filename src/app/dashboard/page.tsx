"use client";
import { AuthContext } from "@/context/authContext";
import { db } from "@/firebase/firebase";
import { onSnapshot, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Task } from "./add_task/page";

export default function Page() {
  const { token } = useContext(AuthContext);

  function kFormatter(num: number | undefined) {
    if (num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000) + "k"
        : Math.sign(num) * Math.abs(num);
    }
  }

  const [tasksList, setTasksList] = useState<Task[]>();
  useEffect(() => {
    if (token) {
      onSnapshot(doc(db, "users", token), (doc) => {
        setTasksList(doc.data()?.tasks_list);
      });
    }
  }, [token]);

  return (
    <div className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-sm p-8 bg-[#1e2b31] text-white">
          <p className="text-[3rem] font-semibold">{tasksList?.length}</p>
          <p className="text-lg font-medium">Number of Tasks</p>
        </div>
        <div className="rounded-sm p-8 bg-[#1e2b31] text-white">
          <p className="text-[3rem] font-semibold">
            ${kFormatter(tasksList?.reduce((a, c) => a + c.wage, 0))}
          </p>
          <p className="text-lg font-medium">Amount Earned</p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-lg mb-5">Recent Tasks</p>
        <table className="w-full text-sm">
          <thead className="uppercase border-y">
            <tr>
              <th scope="col" className="py-3 text-left hidden md:block">
                #
              </th>
              <th scope="col" className="py-3 text-left md:text-center">
                Amount
              </th>
              <th scope="col" className="py-3">
                Type
              </th>
              <th scope="col" className="py-3">
                Wage
              </th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {tasksList?.slice(0, 5).map((task, index) => (
              <tr key={index} className="*:py-7 border-y">
                <th
                  scope="row"
                  className="whitespace-nowrap text-left hidden md:block"
                >
                  {index + 1}
                </th>
                <td className="md:text-center">${task.amount}</td>
                <td className="text-center">{task.type}</td>
                <td className="text-center">${task.wage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
