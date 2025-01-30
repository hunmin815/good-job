"use client";

import { create } from "zustand";
import { Elements } from "../../_lib/types";

type UseStoreSignUp = {
  step: number;
  setStep: (step: number) => void;

  inputInfo: {
    id: string;
    userName: string;
    orgName: string;
    importantElement: Elements;
    pointElement: Elements;
  };
  setInputInfo: (inputInfo: {
    id: string;
    userName: string;
    orgName: string;
    importantElement: Elements;
    pointElement: Elements;
  }) => void;
};

export const useStoreSignUp = create<UseStoreSignUp>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),

  inputInfo: {
    id: "",
    userName: "",
    orgName: "",
    importantElement: {
      work: 0,
      reward: 0,
      grow: 0,
      environment: 0,
      relration: 0,
      value: 0,
    },
    pointElement: {
      work: 0,
      reward: 0,
      grow: 0,
      environment: 0,
      relration: 0,
      value: 0,
    },
  },
  setInputInfo: (inputInfo) => set({ inputInfo }),
}));
