import { ReactNode } from "react";

export function StepMessage({
  step,
  children,
}: {
  step: number;
  children: ReactNode;
}) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
