interface ButtonProps {
  text: string;
  color: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  color,
  className = "",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`rounded-md px-6 py-3 text-[15px] font-medium ${color} transition-colors duration-200 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
