// we define all the types that we will use in the project here
type Step = {
  id: number;
  title: string;
  spanText: string;
  component: JSX.Element;
  isHidden: boolean;
};
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  className?: string;
  type?: string;
  name: string;
}
type Service = {
  label: string;
  spanText: string;
  monthlyPrice: number;
  yearlyPrice: number;
};
type chnageStep = (step: number) => void;

type Package = {
  label: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyFuture: string;
  icon: JSX.Element;
  value: string;
};
type StepProps = {
  order: number;
  title?: string;
  spanText?: string;
  isActive?: boolean;
  setActiveStep: Dispatch<SetStateAction<number>>;
  isHidden: boolean;
  //   we defined the type of each prop here
};
type CheckboxFieldProps = {
  label: string;
  spanText: string;
  service: Service;
  monthlyPrice: number;
  yearlyPrice: number;
  name: string;
};
type FormValues = {
  name: string;
  email: string;
  phone: string;
  package: string;
  planOption: boolean;
  services: string[];
};
