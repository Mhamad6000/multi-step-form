import { useFormContext } from "react-hook-form";

export default function Step({
  order = 1,
  title,
  spanText,
  isActive = false,
  setActiveStep,
  isHidden,
}: StepProps) {
  const { watch } = useFormContext();
  function changeActiveStep() {
    setActiveStep(order);
  }
  if (isHidden) return null;
  return (
    <button
      //  we have a button here that has an onClick event listener that calls the changeActiveStep function when clicked
      disabled={!watch("email") || !watch("phone") || !watch("name")}
      //  the button is disabled if the email, phone, or name fields are empty
      onClick={changeActiveStep}
      className="flex items-center gap-5 disabled:cursor-not-allowed"
    >
      <div
        className={`rounded-full flex justify-center items-center border w-10 h-10 transition duration-200 ${
          // the button has a class name that changes based on the isActive prop
          isActive
            ? "bg-custom-primary-light-blue text-custom-primary-marine-blue border-custom-primary-light-blue"
            : "bg-transparent text-custom-neutral-white border-custom-neutral-white"
        }`}
      >
        <span className="font-bold">{order}</span>
      </div>
      <div className="flex-col items-start justify-start hidden md:flex">
        <span className="text-custom-neutral-light-gray text-sm uppercase font-light">
          {spanText}
        </span>
        <span className="text-custom-neutral-white uppercase font-ubuntu-medium">
          {title}
        </span>
      </div>
    </button>
  );
}
