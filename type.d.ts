type Step = {
  id: number;
  title: string;
  spanText: string;
  component: JSX.Element;
  isHidden: boolean;
};
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
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
