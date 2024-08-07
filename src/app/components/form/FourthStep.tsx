import { useFormContext } from "react-hook-form";
export default function FourthStep({ chnageStep }: { chnageStep: chnageStep }) {
  const { watch } = useFormContext();
  function getTotalForService() {
    // get the selected services and calculate the total
    const servicesArray =
      watch("services").length > 0
        ? watch("services")?.map((service: string) => JSON.parse(service))
        : [];
    return servicesArray?.reduce((acc: number, service: Service) => {
      return watch("planOption") == true
        ? acc + service.yearlyPrice
        : acc + service.monthlyPrice;
    }, 0);
  }
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
                {/* get user selected pakage and see if plan is yearly or monthly */}
                {watch("package") &&
                  JSON?.parse(watch("package"))?.label +
                    (watch("planOption") == true ? " (Yearly)" : " (Monthly)")}
              </span>
              <span
                // change step to 2 to allow user to change the plan
                onClick={() => chnageStep(2)}
                className="text-custom-neutral-cool-gray/80 underline cursor-pointer "
              >
                change
              </span>
            </div>
            <div className="text-custom-primary-marine-blue-hover font-ubuntu-bold ">
              {/* check if plan is monthly or yealry */}
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
              {/* get services array change it parse it to array then map the services */}
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
              {/* change text based selected plan */}
              {watch("planOption") == true
                ? "Total (per year)"
                : "Total (per month)"}
            </span>
          </div>
          <div className="">
            <span className="text-custom-primary-purplish-blue font-ubuntu-bold text-xl">
              {/* get total based on selected packages and plans */}
              {watch("planOption") == true
                ? watch("package") &&
                  `$${
                    JSON?.parse(watch("package"))?.yearlyPrice +
                    getTotalForService()
                  }/yr`
                : watch("package") &&
                  `+$${
                    JSON?.parse(watch("package"))?.monthlyPrice +
                    getTotalForService()
                  }/mo`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
