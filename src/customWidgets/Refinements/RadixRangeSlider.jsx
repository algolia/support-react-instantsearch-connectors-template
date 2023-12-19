import React, { useState, useEffect } from "react";
import { useRange } from "react-instantsearch";
import * as Slider from "@radix-ui/react-slider";
import "./RadixRangeSlider.css";

export function RadixRangeSlider(props) {
  const { start, range, canRefine, refine } = useRange(props);
  const { min, max } = range;
  const [value, setValue] = useState([min, max]);

  const from = Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
  const to = Math.min(max, Number.isFinite(start[1]) ? start[1] : max);

  useEffect(() => {
    setValue([from, to]);
  }, [from, to]);

  return (
    <Slider.Root
      min={min}
      max={max}
      value={value}
      onValueChange={setValue}
      onValueCommit={refine}
      disabled={!canRefine}
    >
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb />
      <Slider.Thumb />
    </Slider.Root>
  );
}
