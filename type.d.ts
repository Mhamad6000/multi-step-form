type Step = {
  id: number;
  title: string;
  spanText: string;
  component: JSX.Element;
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
