import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSlider } from "hooks";
import WorkspaceTile from "./WorkspaceTile";
import { Wrapper, Slider } from "./components";
import { IWorkspaceSliderProps } from "./types";

const WorkspacesSlider: React.VoidFunctionComponent<IWorkspaceSliderProps> = ({ source }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { currentStep, max, onNext, onPrev } = useSlider({ ref: ref });

  return (
    <Wrapper>
      <Slider.Container ref={ref} translateX={currentStep}>
        {source.map((workspace) => (
          <WorkspaceTile key={workspace.id} {...workspace} />
        ))}
      </Slider.Container>

      {currentStep !== 0 && (
        <Slider.Button left onClick={onPrev}>
          <FaChevronLeft />
        </Slider.Button>
      )}

      {currentStep >= max && (
        <Slider.Button right onClick={onNext}>
          <FaChevronRight />
        </Slider.Button>
      )}
    </Wrapper>
  );
};

export default WorkspacesSlider;
