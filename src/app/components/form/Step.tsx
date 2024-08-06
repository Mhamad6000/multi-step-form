import { Dispatch, SetStateAction } from "react";

export default function Step({
  order = 1,
  title = "Your Info",
  spanText = "Step 1",
  isActive = false,
  setActiveStep,
}: //   we have three props here, order, title, and spanText
{
  order: number;
  title: string;
  spanText: string;
  isActive?: boolean;
  setActiveStep: Dispatch<SetStateAction<number>>;
  //   we defined the type of each prop here
}) {
  function changeActiveStep() {
    setActiveStep(order);
  }
  return (
    <button onClick={changeActiveStep} className="flex items-center gap-5">
      <div
        className={`rounded-full flex justify-center items-center border w-10 h-10 transition duration-200 ${
          isActive
            ? "bg-custom-primary-light-blue text-custom-primary-marine-blue border-custom-primary-light-blue"
            : "bg-transparent text-custom-neutral-white border-custom-neutral-white"
        }`}
      >
        <span className="font-bold">{order}</span>
      </div>
      <div className="flex flex-col items-start justify-start">
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
