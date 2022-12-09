import { Steps } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { useMultistepForm } from "../../../../hooks/useMultistepForm";

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const steps = React.Children.toArray(children);
  const { next, snapshot, step, isLastStep, currentStepIndex } =
    useMultistepForm(steps, initialValues);
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
  const items = [
    {
      key:"First",
      title: 'First',
    },
    {
      key:"Second",
      title: 'Second',
    },
    {
      key:"Last",
      title: 'Last',
    },
  ];
  return (
    <div className="pt-20">
      <Steps current={currentStepIndex} items={items} />
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            {step}
            <div className="flex justify-between items-center">
              <p className="font-[Manrope] text-md text-[#585858]">
                Already have an account?
                <Link to={"/login"} className="ml-1 text-[#0067FF]">
                  Log In
                </Link>
              </p>
              <button
                type="submit"
                className="flex items-center justify-center text-white rounded-md py-2 px-5 bg-[#0067FF]"
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export const FormStep = ({ stepName = "", children }) => children;
export default MultiStepForm;
