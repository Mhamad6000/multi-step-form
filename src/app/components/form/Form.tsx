// we used use lient because we are using state in this component
"use client";
import Image from "next/image";
import Step from "./Step";
import { useState } from "react";
import FirstStep from "./FirstStep";

export default function Form() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const steps: Step[] = [
    {
      id: 1,
      title: "Your Info",
      spanText: "Step 1",
    },
    {
      id: 2,
      title: "Select Plan",
      spanText: "Step 2",
    },
    {
      id: 3,
      title: "Add Ons",
      spanText: "Step 3",
    },
    {
      id: 4,
      title: "Summary",
      spanText: "Step 4",
    },
  ];
  return (
    <div className="bg-custom-neutral-white rounded-2xl p-4 w-full max-w-6xl mx-auto flex">
      {/* image with steps */}
      <div className="relative rounded-xl overflow-hidden md:block hidden">
        <Image
          src="/assets/images/bg-sidebar-desktop.svg"
          alt="Illustration of flowing conversation"
          width={400}
          height={600}
          className="object-cover w-80 relative"
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
      <div className="">
        <FirstStep />
        <button className="btn-blue h-min" type="button">
          Next Step
        </button>
      </div>
    </div>
  );
}
