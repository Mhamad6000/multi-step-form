export default function Step({
  order = 1,
  title = "Your Info",
  spanText = "Step 1",
  isActive = false,
}: //   we have three props here, order, title, and spanText
{
  order: number;
  title: string;
  spanText: string;
  isActive?: boolean;
  //   we defined the type of each prop here
}) {
  return (
    <div className="flex items-center gap-5">
      <div
        className={`rounded-full flex justify-center items-center border w-10 h-10 transition duration-200 ${
          isActive
            ? "bg-custom-primary-light-blue text-custom-primary-marine-blue border-custom-primary-light-blue"
            : "bg-transparent text-custom-neutral-white border-custom-neutral-white"
        }`}
      >
        <span className="font-bold">{order}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-custom-neutral-white text-sm uppercase font-light">
          {spanText}
        </span>
        <span className="text-custom-neutral-white uppercase font-semibold">
          {title}
        </span>
      </div>
    </div>
  );
}
