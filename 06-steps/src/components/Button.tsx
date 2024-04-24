import { ReactNode } from "react";

export function Button({
  textColor,
  bgColor,
  onClick,
  children,
}: {
  textColor: string;
  bgColor: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
