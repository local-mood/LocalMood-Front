import { twMerge } from "tailwind-merge";

interface FormInputProps {
  type?: "text" | "password";
  label?: string;
  errorMsg?: string;
  onChange?: (text: string) => void;
  className?: string;
}

export default function FormInput({
  type = "text",
  label,
  errorMsg,
  onChange,
  className,
}: FormInputProps) {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <span className="text-text-gray-6 body2-semibold">{label}</span>
      <input
        type={type}
        className="w-full py-[1rem] pl-[0.4rem] border-b-[0.1rem] border-text-gray-6 mt-[0.9rem]"
      />
    </div>
  );
}