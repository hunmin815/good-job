"use client";

import { useState } from "react";

import Two from "./_components/Two";
import { useStoreSignUp } from "./_components/StoreProvider";
import One from "./_components/One";
import Three from "./_components/Three";

export default function Page() {
  const { step } = useStoreSignUp();

  return (
    <div className="h-full w-full">
      {step === 1 ? <One /> : null}
      {step === 2 ? <Two /> : null}
      {step === 3 ? <Three /> : null}
    </div>
  );
}
