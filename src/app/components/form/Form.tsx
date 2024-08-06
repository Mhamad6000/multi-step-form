// we used use lient because we are using state in this component
"use client";
import Image from "next/image";
import Step from "./Step";
import { useState } from "react";
import FirstStep from "./FirstStep";
import { FormProvider, useForm } from "react-hook-form";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export default function Form() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { ...methods } = useForm();
  const steps: Step[] = [
    {
      id: 1,
      title: "Your Info",
      spanText: "Step 1",
      component: <FirstStep />,
    },
    {
      id: 2,
      title: "Select Plan",
      spanText: "Step 2",
      component: <SecondStep />,
    },
    {
      id: 3,
      title: "Add Ons",
      spanText: "Step 3",
      component: <ThirdStep />,
    },
    {
      id: 4,
      title: "Summary",
      spanText: "Step 4",
      component: <FirstStep />,
    },
  ];
  const chnageStep = (step: number) => {
    setActiveStep(step);
  };
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="bg-custom-neutral-white rounded-2xl p-4 w-full max-w-5xl mx-auto flex justify-stretch">
      {/* image with steps */}
      <div className="relative rounded-xl overflow-hidden md:block hidden flex-shrink-0">
        <Image
          src="/assets/images/bg-sidebar-desktop.svg"
          alt="Illustration of flowing conversation"
          width={400}
          height={600}
          className="object-cover w-72 relative"
          priority={true}
        />
        <div className="flex flex-col gap-5 absolute left-10 top-10 z-10">
          {steps?.map((step, index) => {
            return (
              <Step
                key={index}
                order={index + 1}
                title={step.title}
                spanText={step.spanText}
                isActive={index + 1 === activeStep}
                setActiveStep={setActiveStep}
              />
            );
          })}
        </div>
      </div>
      <div className="self-stretch w-full mx-auto px-8 md:px-12 lg:px-20 xl:px-32 pt-10">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="h-full flex flex-col self-stretch "
          >
            {steps?.map((step, index) => {
              return (
                <div
                  key={index}
                  className={index + 1 === activeStep ? "block" : "hidden"}
                >
                  {step.component}
                </div>
              );
            })}
            <div className="flex justify-between items-center mt-auto mb-5">
              <div className="">
                {activeStep > 1 && (
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
                <button
                  onClick={() => {
                    if (activeStep < steps.length) {
                      setActiveStep(activeStep + 1);
                    }
                  }}
                  className="btn-blue"
                  type="button"
                >
                  Next Step
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
