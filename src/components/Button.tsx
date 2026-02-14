import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, to, onClick, className }: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 shadow-lg hover:shadow-pink-300 hover:scale-105 transition duration-300";

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {text}
    </button>
  );
}
