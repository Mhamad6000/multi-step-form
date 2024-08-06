import InputField from "@/app/components/form/InputField";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
export default function ThirdStep() {
  const packages = [
    {
      label: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      yearlyFuture: "2 months free",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
            />
          </g>
        </svg>
      ),
      value: "arcade",
    },
    {
      label: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      yearlyFuture: "2 months free",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="20" fill="#F9818E" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
            />
          </g>
        </svg>
      ),
      value: "advanced",
    },
    {
      label: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      yearlyFuture: "2 months free",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="20" cy="20" r="20" fill="#483EFF" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
            />
          </g>
        </svg>
      ),
      value: "pro",
    },
  ];

  const { register, watch } = useFormContext();
  const services = [
    {
      label: "Online Service",
      spanText: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      label: "Larger Storage",
      spanText: "Extra 1TB of cloud storage",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      label: "Customizable Profile",
      spanText: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];
  return (
    <div>
      <h1 className="text-custom-primary-marine-blue font-bold text-3xl mb-2 font-ubuntu-bold">
        Pick add-ons
      </h1>
      <p className="text-custom-neutral-cool-gray mb-10">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="grid grid-cols-3 gap-5 mb-8">
        {packages?.map((pkg, index) => {
          return (
            <li key={index} className="group w-full relative">
              <input
                type="radio"
                className="sr-only peer"
                value={pkg?.value}
                id={pkg?.value}
                defaultChecked={index === 0}
                {...register("package", {
                  required: true,
                })}
              />
              <label
                htmlFor={pkg?.value}
                className="border-2 w-full h-40 flex flex-col justify-between hover:bg-custom-neutral-alabaster peer-checked:bg-custom-neutral-alabaster border-custom-neutral-light-gray transition duration-200 peer-checked:border-custom-primary-purplish-blue group-hover:border-custom-primary-purplish-blue rounded-lg p-4 cursor-pointer"
              >
                <div className="">{pkg?.icon}</div>
                <div className="">
                  <div className="text-custom-primary-marine-blue-hover font-ubuntu-bold ">
                    {pkg?.label}
                  </div>

                  {watch("planOption") == false && (
                    <motion.div
                      initial={{ height: "auto", width: 0, opacity: 0 }}
                      animate={{ height: "auto", width: "auto", opacity: 1 }}
                      exit={{ height: 0, width: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-custom-neutral-cool-gray text-sm font-ubuntu-medium"
                    >
                      ${pkg?.monthlyPrice}/mo
                    </motion.div>
                  )}
                  {watch("planOption") == true && (
                    <motion.div
                      initial={{ height: "auto", width: 0, opacity: 0 }}
                      animate={{ height: "auto", width: "auto", opacity: 1 }}
                      exit={{ height: 0, width: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-custom-neutral-cool-gray text-sm font-ubuntu-medium"
                    >
                      ${pkg?.yearlyPrice}/year
                    </motion.div>
                  )}
                  {watch("planOption") == true && (
                    <motion.div
                      initial={{ height: "auto", width: "auto", opacity: 0 }}
                      animate={{ height: "auto", width: "auto", opacity: 1 }}
                      exit={{ height: 0, width: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-custom-primary-marine-blue-hover text-sm font-ubuntu-medium flex-shrink-0"
                    >
                      {pkg?.yearlyFuture}
                    </motion.div>
                  )}
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col gapp-5">
        {services?.map((service, index) => {
          return (
            <div key={index} className="relative">
              <input
                className="text-violet-500 accent-custom-primary-purplish-blue focus:ring-violet-300 border-gray-300 peer rounded-lg w-6 h-6 absolute top-7 left-4 "
                id="custom-checkbox"
                name="custom-checkbox"
                type="checkbox"
                value="custom-checkbox"
              />
              <label
                className="w-[400px] h-[80px] cursor-pointer flex flex-row justify-between items-center border rounded-lg p-4  
            active:bg-violet-700 
            peer-focus:outline-none peer-focus:ring peer-focus:ring-violet-300 
            peer-checked:border-violet-300 peer-checked:bg-violet-100
            hover:bg-violet-100"
                htmlFor="custom-checkbox"
              >
                <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
                  <div>
                    <h3 className="font-bold">Online service</h3>
                    <p className="text-sm text-gray-400">
                      Access to multiplayer games
                    </p>
                  </div>
                  <p className="font-bold text-violet-600">$10/mo</p>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
