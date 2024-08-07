// we used use lient because we are using state in this component
"use client";
import Image from "next/image";
import Step from "./Step";
import { useState } from "react";
import FirstStep from "./FirstStep";
import { FormProvider, Resolver, useForm } from "react-hook-form";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import ThankYouStep from "./ThankYouStep";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { motion } from "framer-motion";
export default function Form() {
  const [activeStep, setActiveStep] = useState<number>(1);
  type FormValues = {
    name: string;
    phone: number | undefined;
    email: string;
  };
  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is a required field"),
    phone: yup
      .string()
      .required("Phone is a required field")
      .matches(
        // it changes based on the country
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid phone number format"
      ),
  });

  const { ...methods } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
    },
    resolver: yupResolver(schema),
  });
  const chnageStep = (step: number) => {
    setActiveStep(step);
  };
  const steps: Step[] = [
    {
      id: 1,
      title: "Your Info",
      spanText: "Step 1",
      component: <FirstStep />,
      isHidden: false,
    },
    {
      id: 2,
      title: "Select Plan",
      spanText: "Step 2",
      component: <SecondStep />,
      isHidden: false,
    },
    {
      id: 3,
      title: "Add Ons",
      spanText: "Step 3",
      component: <ThirdStep />,
      isHidden: false,
    },
    {
      id: 4,
      title: "Summary",
      spanText: "Step 4",
      component: <FourthStep chnageStep={chnageStep} />,
      isHidden: false,
    },
    {
      id: 5,
      title: "Thank You",
      spanText: "Step 5",
      component: <ThankYouStep />,
      isHidden: true,
    },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    setActiveStep(activeStep + 1);
    methods?.reset();
  };
  return (
    <div className="bg-custom-neutral-alabaster md:bg-custom-neutral-white rounded-2xl md:p-4 w-full max-w-5xl mx-auto flex justify-stretch flex-col md:flex-row">
      {/* image with steps */}
      <FormProvider {...methods}>
        <div className="relative md:rounded-xl overflow-hidden flex-shrink-0 ">
          <Image
            src="/assets/images/bg-sidebar-desktop.svg"
            alt="Illustration of flowing conversation"
            width={400}
            height={600}
            className="object-cover w-72 h-full relative md:block hidden"
            priority={true}
          />
          <Image
            src="/assets/images/bg-sidebar-mobile.svg"
            alt="Illustration of flowing conversation"
            width={400}
            height={600}
            className="object-cover w-full min-h-48 max-h-56 relative md:hidden block"
            priority={true}
          />
          <div className="flex flex-row md:flex-col  gap-5 absolute left-0 top-0 w-full p-10 justify-center z-10">
            {steps?.map((step, index) => {
              return (
                <Step
                  key={index}
                  order={index + 1}
                  title={step.title}
                  spanText={step.spanText}
                  isActive={
                    activeStep == steps?.length
                      ? index + 1 == activeStep - 1
                      : index + 1 === activeStep
                  }
                  setActiveStep={setActiveStep}
                  isHidden={step.isHidden}
                />
              );
            })}
          </div>
        </div>
        <div className="self-stretch w-full mx-auto px-4 md:px-6 lg:px-16 xl:px-[108px] pt-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(methods.getValues());
            }}
            className="h-full flex flex-col self-stretch "
          >
            <div className="h-full w-full bg-custom-neutral-white rounded-xl px-5 py-8 md:py-0 relative -translate-y-28 md:-translate-y-0">
              {steps?.map((step, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index + 1 === activeStep ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`md:mb-10 ${
                      index + 1 === activeStep ? "block h-full" : "hidden"
                    }`}
                  >
                    {step.component}
                  </motion.div>
                );
              })}
            </div>
            {activeStep !== steps?.length && (
              <div className="flex justify-between items-center mt-auto md:mb-5 fixed md:bg-transparent h-20 bg-custom-neutral-white md:relative bottom-0 left-0 w-full px-10 md:px-5">
                <div className="">
                  {activeStep > 1 && activeStep < steps?.length && (
                    <button
                      onClick={() => {
                        if (activeStep > 1) {
                          setActiveStep(activeStep - 1);
                        }
                      }}
                      className="btn-prev"
                      type="button"
                    >
                      Go Back
                    </button>
                  )}
                </div>
                <div className="">
                  {activeStep == steps.length - 1 &&
                    activeStep !== steps.length && (
                      <button
                        type="submit"
                        className="btn-blue bg-custom-primary-purplish-blue px-8 hover:bg-custom-primary-purplish-blue/80"
                      >
                        Confirm
                      </button>
                    )}
                  {activeStep !== steps.length &&
                    activeStep !== steps.length - 1 && (
                      <button
                        onClick={() => {
                          if (!methods?.formState?.isValid) {
                            methods.handleSubmit(onSubmit)();
                          } else {
                            if (activeStep < steps.length + 1) {
                              setActiveStep(activeStep + 1);
                            }
                          }
                        }}
                        className="btn-blue disabled:cursor-not-allowed"
                        type="button"
                      >
                        Next Step
                      </button>
                    )}
                </div>
              </div>
            )}
          </form>
        </div>
      </FormProvider>
    </div>
  );
}
