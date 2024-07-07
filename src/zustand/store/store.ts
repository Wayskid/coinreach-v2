import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type option = {
  id: string;
  option: string;
};

export type Assessment = {
  id: number;
  qstn: string;
  options: option[];
  ans: string;
  user_choice: string;
  user_score: number;
};

export type FormVals = {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  DOB: { day: string; month: string; year: string; age?: number };
  gender: string;
  nationality: string;
  right_to_work: string;
  experience: string;
  reason_for_joining: string;
};

export type State = {
  protocol: {
    your_info: boolean;
    assessment: boolean;
    success: boolean;
  };
  formVals: FormVals;
  assessments: Assessment[];
};

export type Actions = {
  setProtocol: (protocolToSet: string) => void;
  setFormVals: (
    name: string,
    value: string | number | { day: string; month: string; year: string }
  ) => void;
  setUserScore: (id: number, user_choice: string) => void;
  clearAssessment: () => void;
};

const initialState: State = {
  protocol: {
    your_info: true,
    assessment: false,
    success: false,
  },
  formVals: {
    first_name: "",
    last_name: "",
    email: "",
    phone: 0,
    DOB: { day: "30", month: "04", year: "1997" },
    gender: "",
    nationality: "",
    right_to_work: "",
    experience: "",
    reason_for_joining: "",
  },
  assessments: [
    {
      id: 1,
      qstn: "What is the importance of efficiency and speed in the Fintech industry?",
      options: [
        {
          id: "1option1",
          option: "To reduce costs and improve customer satisfaction",
        },
        {
          id: "1option2",
          option: "To increase security and prevent fraud",
        },
        {
          id: "1option3",
          option: "To enhance user experience and gain a competitive edge",
        },
        {
          id: "1option4",
          option: "All of the above",
        },
      ],
      ans: "1option4",
      user_choice: "",
      user_score: 0,
    },
    {
      id: 2,
      qstn: "Your company wants to distribute tasks to its employees. Mr. John is fast but not efficient, Mrs. Jane is efficient but slow. What do you suggest your company should do?",
      options: [
        {
          id: "2option1",
          option:
            "Hire a new employee who is both fast and efficient to handle critical tasks",
        },
        {
          id: "2option2",
          option:
            "Assign tasks that require efficiency to Mr. John and tasks that require speed to Mrs. Jane",
        },
        {
          id: "2option3",
          option:
            "Assign a mix of tasks to both Mr. John and Mrs. Jane to balance out their strengths and weaknesses",
        },
        {
          id: "2option4",
          option:
            "Provide training to both Mr. John and Mrs. Jane to improve their weaknesses before assigning tasks",
        },
      ],
      ans: "2option1",
      user_choice: "",
      user_score: 0,
    },
    {
      id: 3,
      qstn: "What is 7% of $500?",
      options: [
        {
          id: "3option1",
          option: "$34.50",
        },
        {
          id: "3option2",
          option: "$36.35",
        },
        {
          id: "3option3",
          option: "$35.50",
        },
        {
          id: "3option4",
          option: "$35.00",
        },
      ],
      ans: "3option4",
      user_choice: "",
      user_score: 0,
    },
    {
      id: 4,
      qstn: "What do you think is the most effective way to grow a company?",
      options: [
        {
          id: "4option1",
          option: "Build a strong company culture for efficient employees",
        },
        {
          id: "4option2",
          option: "Aggressive sales, advertising, and affiliate programs",
        },
        {
          id: "4option3",
          option: "Invest in research and development",
        },

        {
          id: "4option4",
          option: "Develop strategic partnerships and collaborations",
        },
      ],
      ans: "4option1",
      user_choice: "",
      user_score: 0,
    },
    {
      id: 5,
      qstn: "Workplace efficiency refers to:",
      options: [
        {
          id: "5option1",
          option: "The amount of time spent on social media during work hours",
        },
        {
          id: "5option2",
          option: "The number of tasks completed by an employee in a day",
        },
        {
          id: "5option3",
          option:
            "The optimal use of resources to achieve goals with minimal waste",
        },
        {
          id: "5option4",
          option: "The overall job satisfaction of employees",
        },
      ],
      ans: "5option3",
      user_choice: "",
      user_score: 0,
    },
    {
      id: 6,
      qstn: "What do you think is the most effective way to grow your company?",
      options: [
        {
          id: "6option1",
          option: "Aggressive sales, advertising, and affiliate programs",
        },
        {
          id: "6option2",
          option: "Invest in research and development",
        },
        {
          id: "6option3",
          option: "Build a strong company culture for efficient employees",
        },
        {
          id: "6option4",
          option: "Develop strategic partnerships and collaborations",
        },
      ],
      ans: "6option3",
      user_choice: "",
      user_score: 0,
    },
    {
      id: 7,
      qstn: "What is cryptocurrency?",
      options: [
        {
          id: "7option1",
          option:
            "A digital asset decentralized in name only, still controlled by a central authority",
        },
        {
          id: "7option2",
          option:
            "A digital or virtual currency that uses cryptography for security and is truly decentralized",
        },
        {
          id: "7option3",
          option:
            "A digital representation of a physical commodity, such as gold or oil",
        },
        {
          id: "7option4",
          option:
            "A private company's digital payment system, similar to a digital wallet",
        },
      ],
      ans: "7option2",
      user_choice: "",
      user_score: 0,
    },
  ],
};

export const assessmentStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setProtocol: (protocolToSet) =>
        set((state) => ({
          protocol: { ...state.protocol, [protocolToSet]: true },
        })),
      setFormVals: (name, value) =>
        set((state) => ({
          formVals: { ...state.formVals, [name]: value },
        })),
      setUserScore: (id, user_choice) =>
        set((state) => ({
          assessments: state.assessments.filter((assessment) => {
            if (id === assessment.id) {
              assessment.user_choice = user_choice;
              if (user_choice === assessment.ans) {
                assessment.user_score = 1;
              } else assessment.user_score = 0;
            }
            return assessment;
          }),
        })),
      clearAssessment: () =>
        set(() => ({
          assessments: initialState.assessments,
          formVals: initialState.formVals,
        })),
    }),
    { name: "cr-zustand", storage: createJSONStorage(() => sessionStorage) }
  )
);
