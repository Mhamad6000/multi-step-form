import InputField from "@/app/components/form/InputField";

export default function SecondStep() {
  return (
    <div>
      <h1 className="text-custom-primary-marine-blue font-bold text-3xl mb-2 font-ubuntu-bold">
        Select your plan
      </h1>
      <p className="text-custom-neutral-cool-gray mb-10">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-6">
        <InputField
          label="Name"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          type="text"
        />
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
        />
        <InputField
          label="Phone Number"
          type="number"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
  );
}
