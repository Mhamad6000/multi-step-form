import InputField from "@/app/components/form/InputField";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
export default function ThirdStep() {
  const { register, watch } = useFormContext();
  const services: Service[] = [
    {
      label: "Online service",
      spanText: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      label: "Larger storage",
      spanText: "Extra 1TB of cloud storage",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      label: "Customizable profile",
      spanText: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  return (
    <div>
      <h1 className="text-custom-primary-marine-blue font-bold text-2xl md:text-4xl mb-2 font-ubuntu-bold">
        Pick add-ons
      </h1>
      <p className="text-custom-neutral-cool-gray mb-10">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-5">
        {services?.map((service, index) => {
          return (
            <div key={index} className="relative flex items-center">
              <input
                className="text-custom-primary-purplish-blue accent-custom-primary-purplish-blue focus:border-custom-primary-purplish-blue shadow-custom-neutral-light-gray !border-custom-neutral-light-gray peer rounded-lg w-5 h-5 absolute top-1/2 -translate-y-1/2 left-5 "
                id={service.label}
                type="checkbox"
                value={JSON.stringify({
                  ...service,
                })}
                {...register("services")}
              />
              <label
                className="w-full min-h-[80px] cursor-pointer flex flex-row justify-between items-center border border-custom-neutral-light-gray rounded-lg p-4  
            active:bg-custom-neutral-magnolia
            peer-focus:outline-none 
            peer-checked:border-custom-primary-purplish-blue peer-checked:bg-custom-neutral-magnolia
            hover:border-custom-primary-purplish-blue"
                htmlFor={service.label}
              >
                <div className="flex flex-row justify-between items-center w-full ml-10 mr-4">
                  <div>
                    <h3 className="text-custom-primary-marine-blue-hover font-ubuntu-bold">
                      {service.label}
                    </h3>
                    <p className="text-sm text-custom-neutral-cool-gray">
                      {service.spanText}
                    </p>
                  </div>
                  <p className="text-custom-primary-purplish-blue text-sm font-ubuntu-medium">
                    {watch("planOption")
                      ? `+$${service.yearlyPrice}/yr`
                      : `+$${service.monthlyPrice}/mo`}
                  </p>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
