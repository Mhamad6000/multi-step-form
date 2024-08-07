import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

export default function Step({
  order = 1,
  title,
  spanText,
  isActive = false,
  setActiveStep,
  isHidden,
}: //   we have three props here, order, title, and spanText
{
  order: number;
  title?: string;
  spanText?: string;
  isActive?: boolean;
  setActiveStep: Dispatch<SetStateAction<number>>;
  isHidden: boolean;
  //   we defined the type of each prop here
}) {
  const { watch } = useFormContext();
  function changeActiveStep() {
    setActiveStep(order);
  }
  if (isHidden) return null;
  return (
    <button
      disabled={!watch("email") || !watch("phone") || !watch("name")}
      onClick={changeActiveStep}
      className="flex items-center gap-5 disabled:cursor-not-allowed"
    >
      <div
        className={`rounded-full flex justify-center items-center border w-10 h-10 transition duration-200 ${
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
