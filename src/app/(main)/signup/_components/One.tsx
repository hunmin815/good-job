"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Input } from "rsuite";
import { useStoreSignUp } from "./StoreProvider";

export default function One({}: {}) {
  const { setStep, inputInfo, setInputInfo } = useStoreSignUp();

  return (
    <div>
      <div className="my-5 flex w-full items-center justify-between px-2">
        <button className="inline-flex items-center text-blue-500">
          <ChevronLeftIcon className="h-5 w-5" /> <p>뒤로가기</p>
        </button>
        <button
          className="inline-flex items-center text-blue-500"
          onClick={() => setStep(2)}
        >
          <p>다음</p> <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <section className="mt-4 flex flex-col pl-2">
        <p className="text-2xl font-semibold">이름을 알려주세요</p>
        <div className="mt-2 px-4">
          <Input
            placeholder="이름"
            size="lg"
            value={inputInfo.userName}
            onChange={(e) => {
              setInputInfo({ ...inputInfo, userName: e });
            }}
          />
        </div>
      </section>
      <section className="mt-4 flex flex-col pl-2">
        <p className="text-2xl font-semibold">조직(회사)명을 알려주세요</p>
        <div className="mt-2 px-4">
          <Input
            placeholder="회사명"
            size="lg"
            value={inputInfo.orgName}
            onChange={(e) => {
              setInputInfo({ ...inputInfo, orgName: e });
            }}
          />
        </div>
      </section>
    </div>
  );
}
