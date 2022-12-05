import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshop] = useState(initialValues);
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === steps.length - 1;
  const next = (values) => {
    setStepNumber((num) => num + 1);
    setSnapshop(values);
  };
//   const back = () => {
//     setStepNumber((num) => num - 1);
//     setSnapshop(values);
//   };
  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) return onSubmit(values, actions);
    else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          {step}
          <button
            type="submit"
            className="flex items-center justify-center text-white rounded-md py-2 px-5 bg-[#0067FF]"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export const FormStep = ({ stepName = "", children }) => children;
export default MultiStepForm;
