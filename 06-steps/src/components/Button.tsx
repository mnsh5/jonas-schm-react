import { ReactNode } from "react";

type Props = {
  textColor: string;
  bgColor: string;
  onClick: () => void;
  children: ReactNode;
};

export function Button({ textColor, bgColor, onClick, children }: Props) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
