import { RefObject, useState, useEffect } from "react";

interface UseSliderProps {
  ref: RefObject<HTMLDivElement>;
}

const useSlider = (props: UseSliderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [step, setStep] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const element = props.ref.current as HTMLDivElement;
    if (element !== null) {
      const width = element.offsetWidth;
      const scrollWidth = element.scrollWidth;
      const children = element.childElementCount;
      const childWidth = (element.children[0] as HTMLDivElement).offsetWidth;
      const childWidthTotal = children * childWidth;
      const marginByChild = (scrollWidth - childWidthTotal) / children;

      setStep((childWidth + marginByChild) / 2);
      setMax(width - scrollWidth - marginByChild / 2 + marginByChild * 2);
    }
  }, [props.ref]);

  const onPrev = (): void => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep + step);
  };

  const onNext = (): void => {
    if (currentStep <= max) return;
    setCurrentStep(currentStep - step);
  };

  return {
    max,
    currentStep,
    onPrev,
    onNext,
  };
};

export default useSlider;
