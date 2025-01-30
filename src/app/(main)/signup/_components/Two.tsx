"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useStoreSignUp } from "./StoreProvider";
import { Slider } from "rsuite";
import CenterSlider from "../../_components/CenterSlider";

export default function Two() {
  const { inputInfo, setStep, setInputInfo } = useStoreSignUp();

  return (
    <div>
      <div className="my-5 flex w-full items-center justify-between px-2">
        <button
          className="inline-flex items-center text-blue-500"
          onClick={() => setStep(1)}
        >
          <ChevronLeftIcon className="h-5 w-5" /> <p>뒤로가기</p>
        </button>
        <button
          className="inline-flex items-center text-blue-500"
          onClick={() => setStep(3)}
        >
          <p>다음</p> <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="px-2">
        <section className="text-2xl">
          <span>각 영역에 대한</span>
          <span className="ml-1 font-semibold">{inputInfo.userName}</span>
          <span>님의 요소별 중요도를 매겨주세요</span>
        </section>

        <section className="mt-10 flex flex-col items-center rounded-lg bg-gradient-to-b from-cyan-100 to-cyan-50 p-4 drop-shadow-lg">
          <span className="inline-flex items-center">
            <p className="text-xl font-semibold">요소별 중요도</p>
            <InformationCircleIcon className="ml-1 h-5 w-5 text-gray-500" />
          </span>
          <div className="mt-5 w-full">
            <span className="inline-flex w-full items-center">
              <p className="w-[55px] text-lg font-semibold text-gray-600">
                업무
              </p>
              <span className="ml-1 w-full">
                <CenterSlider
                  value={inputInfo.importantElement.work}
                  onChange={(value) => {
                    setInputInfo({
                      ...inputInfo,
                      importantElement: {
                        ...inputInfo.importantElement,
                        work: value,
                      },
                    });
                  }}
                />
              </span>
            </span>

            <span className="mt-5 inline-flex w-full items-center">
              <p className="w-[55px] text-lg font-semibold text-gray-600">
                보상
              </p>
              <span className="ml-1 w-full">
                <CenterSlider
                  value={inputInfo.importantElement.reward}
                  onChange={(value) => {
                    setInputInfo({
                      ...inputInfo,
                      importantElement: {
                        ...inputInfo.importantElement,
                        reward: value,
                      },
                    });
                  }}
                />
              </span>
            </span>

            <span className="mt-5 inline-flex w-full items-center">
              <p className="w-[55px] text-lg font-semibold text-gray-600">
                성장
              </p>
              <span className="ml-1 w-full">
                <CenterSlider
                  value={inputInfo.importantElement.grow}
                  onChange={(value) => {
                    setInputInfo({
                      ...inputInfo,
                      importantElement: {
                        ...inputInfo.importantElement,
                        grow: value,
                      },
                    });
                  }}
                />
              </span>
            </span>

            <span className="mt-5 inline-flex w-full items-center">
              <p className="w-[55px] text-lg font-semibold text-gray-600">
                환경
              </p>
              <span className="ml-1 w-full">
                <CenterSlider
                  value={inputInfo.importantElement.environment}
                  onChange={(value) => {
                    setInputInfo({
                      ...inputInfo,
                      importantElement: {
                        ...inputInfo.importantElement,
                        environment: value,
                      },
                    });
                  }}
                />
              </span>
            </span>

            <span className="mt-5 inline-flex w-full items-center">
              <p className="w-[55px] text-lg font-semibold text-gray-600">
                관계
              </p>
              <span className="ml-1 w-full">
                <CenterSlider
                  value={inputInfo.importantElement.relration}
                  onChange={(value) => {
                    setInputInfo({
                      ...inputInfo,
                      importantElement: {
                        ...inputInfo.importantElement,
                        relration: value,
                      },
                    });
                  }}
                />
              </span>
            </span>

            <span className="mt-5 inline-flex w-full items-center">
              <p className="w-[55px] text-lg font-semibold text-gray-600">
                가치
              </p>
              <span className="ml-1 w-full">
                <CenterSlider
                  value={inputInfo.importantElement.value}
                  onChange={(value) => {
                    setInputInfo({
                      ...inputInfo,
                      importantElement: {
                        ...inputInfo.importantElement,
                        value: value,
                      },
                    });
                  }}
                />
              </span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
