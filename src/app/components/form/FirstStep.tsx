import InputField from "@/app/components/form/InputField";

export default function FirstStep() {
  return (
    <div>
      <h1 className="text-custom-primary-marine-blue font-bold text-2xl md:text-4xl mb-2 font-ubuntu-bold">
        Personal info
      </h1>
      <p className="text-custom-neutral-cool-gray mb-10">
        Please provie your name, email address, and phone number
      </p>
      <div className="flex flex-col gap-6">
        {/* custom input fields for name , email , phone */}
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
