"use client";

import { useState } from "react";
import InputInfo from "./_components/InputInfo";
import Two from "./_components/Two";
import { useStoreSignUp } from "./_components/StoreProvider";

export default function Page() {
  const { step } = useStoreSignUp();

  return (
    <div className="h-full w-full">
      {step === 1 ? <InputInfo /> : null}
      {step === 2 ? <Two /> : null}
    </div>
  );
}
