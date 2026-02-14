// src/components/Button.tsx

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ text, type = "button", onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300"
    >
      {text}
    </button>
  );
};

export default Button;