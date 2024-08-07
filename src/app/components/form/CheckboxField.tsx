import { useFormContext } from "react-hook-form";

export default function CheckboxField({
  label,
  spanText,
  service,
  monthlyPrice,
  yearlyPrice,
  name,
}: CheckboxFieldProps) {
  const { register, watch } = useFormContext();
  return (
    <div className="relative flex items-center">
      <input
        className="text-custom-primary-purplish-blue accent-custom-primary-purplish-blue focus:border-custom-primary-purplish-blue shadow-custom-neutral-light-gray !border-custom-neutral-light-gray peer rounded-lg w-5 h-5 absolute top-1/2 -translate-y-1/2 left-5 "
        id={label}
        type="checkbox"
        value={JSON.stringify({
          ...service,
        })}
        {...register(name)}
      />
      <label
        className="w-full min-h-[80px] cursor-pointer flex flex-row justify-between items-center border border-custom-neutral-light-gray rounded-lg p-4  
  active:bg-custom-neutral-magnolia
  peer-focus:outline-none 
  peer-checked:border-custom-primary-purplish-blue peer-checked:bg-custom-neutral-magnolia
  hover:border-custom-primary-purplish-blue"
        htmlFor={label}
      >
        <div className="flex flex-row justify-between items-center w-full ml-10 mr-4">
          <div>
            <h3 className="text-custom-primary-marine-blue-hover font-ubuntu-bold">
              {label}
            </h3>
            <p className="text-sm text-custom-neutral-cool-gray">{spanText}</p>
          </div>
          <p className="text-custom-primary-purplish-blue text-sm font-ubuntu-medium">
            {watch("planOption")
              ? `+$${yearlyPrice}/yr`
              : `+$${monthlyPrice}/mo`}
          </p>
        </div>
      </label>
    </div>
  );
}
