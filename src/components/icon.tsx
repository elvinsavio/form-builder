import { CSSProperties, ReactNode } from "react";
import { editorStyle } from "../style/editor";

interface IProps {
  id?: string;
  tooltip?: string;
  icon: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
export default function Icon({ id, tooltip, icon, className, onClick, style }: IProps) {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`${editorStyle?.icons?.common?.styles?.className}  ${className}`}
      style={{ ...editorStyle?.icons?.common?.styles?.style, ...style }}
    >
      {icon}
      {tooltip && (
        <span className={editorStyle.tooltip?.styles?.className} style={editorStyle.tooltip?.styles?.style}>
          {tooltip}
        </span>
      )}
    </button>
  );
}
// ""
