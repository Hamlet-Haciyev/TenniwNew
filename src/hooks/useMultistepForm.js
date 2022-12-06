import { useState } from "react";

export const useMultistepForm = (steps, initialValues) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const next = (values) => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
    setSnapshot(values);
  };
  const back = (values) => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
    setSnapshot(values);
  };
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    back,
    next,
    snapshot,
  };
};
