import { CSSProperties, ReactNode } from "react";
import { editorStyle } from "../style/editor";

interface IProps {
  icon: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
export default function Icon({ icon, className, onClick, style }: IProps) {
  return (
    <div
      onClick={onClick}
      className={`${editorStyle?.icons?.common?.styles?.className}  ${className}`}
      style={{ ...editorStyle?.icons?.common?.styles?.style, ...style }}
    >
      {icon}
    </div>
  );
}
