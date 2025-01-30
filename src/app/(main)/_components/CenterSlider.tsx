"use client";

import { useRef } from "react";
import { Slider } from "rsuite";

export default function CenterSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const offset = useRef(50).current;

  return (
    <Slider
      className="w-full"
      value={value + offset}
      onChange={(value) => {
        const newValue = value - 50;
        onChange(newValue);
      }}
      renderTooltip={(value) => {
        if (!value) {
          return <span>0</span>;
        }
        return <span>{value - 50}</span>;
      }}
    />
  );
}
