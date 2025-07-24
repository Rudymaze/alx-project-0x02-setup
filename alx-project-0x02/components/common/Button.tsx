import React from "react";

type Size = "small" | "medium" | "large";
type Shape = "rounded-sm" | "rounded-md" | "rounded-full";

const sizeClasses: Record<Size, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses: Record<Shape, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

interface ButtonProps {
  size?: Size;
  shape?: Shape;
  children?: React.ReactNode;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  ...props
}) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];

  return (
    <button
      className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${sizeClass} ${shapeClass}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
