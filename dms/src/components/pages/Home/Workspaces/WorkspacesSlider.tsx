import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSlider } from "hooks";
import WorkspaceTile from "./WorkspaceTile";
import { Wrapper, Slider } from "./helpers";
import source from "./source";

const WorkspacesSlider: React.VoidFunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { currentStep, max, onNext, onPrev } = useSlider({ ref: ref });

  return (
    <Wrapper>
      <Slider.Container ref={ref} translateX={currentStep}>
        {source.map((workspace) => (
          <WorkspaceTile key={workspace.title} icon={workspace.icon} title={workspace.title} backgroundImage={workspace.backgroundImage} />
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
