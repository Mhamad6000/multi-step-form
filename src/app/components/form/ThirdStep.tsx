import { useFormContext } from "react-hook-form";
import CheckboxField from "@/app/components/form/CheckboxField";
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
      <div className="flex flex-col gap-4">
        {services?.map((service, index) => {
          return (
            <CheckboxField
              key={index}
              name="services"
              label={service?.label}
              monthlyPrice={service?.monthlyPrice}
              yearlyPrice={service?.yearlyPrice}
              spanText={service?.spanText}
              service={service}
            />
          );
        })}
      </div>
    </div>
  );
}
