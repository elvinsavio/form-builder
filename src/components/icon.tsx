import { ReactNode } from "react";
import { editorStyle } from "../style/editor";

interface IProps {
  icon: ReactNode;
  className?: string;
  onClick: () => void;
}
export default function Icon({ icon, className, onClick }: IProps) {
  return (
    <div
      onClick={onClick}
      className={`${editorStyle.icons.common.styles?.className} ${editorStyle.icons.edit.styles?.className}  ${className}`}
      style={editorStyle.icons.edit.styles?.style}
    >
      {icon}
    </div>
  );
}