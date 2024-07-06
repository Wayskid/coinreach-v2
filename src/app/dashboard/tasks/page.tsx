"use client";
import { AuthContext } from "@/context/authContext";
import { db } from "@/firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Task } from "../add_task/page";

export default function Page() {
  const { token } = useContext(AuthContext);
  const [tasksList, setTasksList] = useState<Task[]>();
  useEffect(() => {
    if (token) {
      onSnapshot(doc(db, "users", token), (doc) => {
        setTasksList(doc.data()?.tasks_list);
      });
    }
  }, [token]);

  return (
    <div className="mt-5">
      <div className="flex justify-between mb-5 items-center">
        <p className="text-lg">All Tasks</p>
        <p className="">{tasksList?.length} tasks</p>
      </div>
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
          {tasksList?.map((task, index) => (
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
  );
}
