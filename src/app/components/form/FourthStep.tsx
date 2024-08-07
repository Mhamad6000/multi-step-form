import InputField from "@/app/components/form/InputField";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
export default function FourthStep({
  chnageStep,
}: {
  chnageStep: (step: number) => void;
}) {
  const { register, watch } = useFormContext();

  return (
    <div>
      <h1 className="text-custom-primary-marine-blue font-bold text-2xl md:text-4xl mb-2 font-ubuntu-bold">
        Finishing up
      </h1>
      <p className="text-custom-neutral-cool-gray mb-10">
        Double-check everything looks OK before you confirming.
      </p>
      <div className="">
        <div className="bg-custom-neutral-alabaster rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-custom-primary-marine-blue-hover font-ubuntu-medium text-lg">
                {watch("package") &&
                  JSON?.parse(watch("package"))?.label +
                    (watch("planOption") == true ? " (Yearly)" : " (Monthly)")}
              </span>
              <span
                onClick={() => chnageStep(2)}
                className="text-custom-neutral-cool-gray/80 underline cursor-pointer "
              >
                change
              </span>
            </div>
            <div className="text-custom-primary-marine-blue-hover font-ubuntu-bold ">
              {watch("planOption") == true
                ? watch("package") && (
                    <span>
                      ${JSON?.parse(watch("package"))?.yearlyPrice}/yr
                    </span>
                  )
                : watch("package") && (
                    <span>
                      ${JSON?.parse(watch("package"))?.monthlyPrice}/mo
                    </span>
                  )}
            </div>
          </div>

          {watch("services")?.length > 0 && (
            <div className="border-t border-custom-neutral-light-gray/60 pt-5 gap-4 flex flex-col mt-5">
              {watch("services")
                ?.map((service: string) => JSON.parse(service))
                ?.map((service: Service, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex flex-col">
                        <span className="text-custom-neutral-cool-gray/80">
                          {service?.label}
                        </span>
                      </div>
                      <div className="text-custom-primary-marine-blue-hover font-ubuntu-reg ">
                        {watch("planOption") == true ? (
                          <span>${service?.yearlyPrice}/yr</span>
                        ) : (
                          <span>${service?.monthlyPrice}/mo</span>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6 px-6">
          <div className="">
            <span className="text-custom-neutral-cool-gray">
              {watch("planOption") == true
                ? "Total (per year)"
                : "Total (per month)"}
            </span>
          </div>
          <div className="">
            <span className="text-custom-primary-purplish-blue font-ubuntu-bold text-xl">
              {watch("planOption") == true
                ? watch("package") &&
                  `$${JSON?.parse(watch("package"))?.yearlyPrice + 2}/yr`
                : watch("package") &&
                  `+$${JSON?.parse(watch("package"))?.monthlyPrice + 2}/mo`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
