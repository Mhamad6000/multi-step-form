import { useFormContext } from "react-hook-form";

const InputField = ({
  label,
  placeholder,
  className,
  type,
  name,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="">
      <div className="flex justify-between mb-1">
        <label htmlFor="name" className="text-custom-primary-marine-blue ">
          {label}
        </label>
        <div className="hidden md:block">
          {errors[name]?.message && (
            <span className="text-custom-primary-strawberry-red text-sm">
              {errors[name]?.message.toString()}
            </span>
          )}
        </div>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`custom-input w-full ${className} placeholder:font-ubuntu-medium text-custom-primary-marine-blue ${
          errors[name] && "!border-custom-primary-strawberry-red"
        }`}
        {...props}
        {...register(name)}
      />
      {/* in the mobile show it below */}
      <div className="block md:hidden pt-1 px-0.5">
        {errors[name]?.message && (
          <span className="text-custom-primary-strawberry-red text-sm">
            {errors[name]?.message.toString()}
          </span>
        )}
      </div>
    </div>
  );
};
export default InputField;
