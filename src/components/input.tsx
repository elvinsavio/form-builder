import { MdClose, MdDone } from "react-icons/md";
import { editorStyle } from "../style/editor";
import Icon from "./icon";
import { useState } from "react";

interface IProps {
  value: string;
  onSave: (value: string) => void;
  onCancel: () => void;
}
export default function Input({ value, onSave, onCancel }: IProps) {
  const [state, setState] = useState<typeof value>(value);

  const handleSave = () => {
    onSave(state);
  };

  return (
    <div className="flex w-full my-1">
      <input
        type="text"
        className={editorStyle?.input?.commonInput?.styles?.className}
        style={editorStyle?.input?.commonInput?.styles?.style}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        className={editorStyle?.input?.commonSave?.styles?.className}
        style={editorStyle?.input?.commonSave?.styles?.style}
        onClick={handleSave}
      >
        {editorStyle?.input?.commonSave?.useIcon ? <Icon icon={<MdDone />} /> : "Save"}
      </button>
      <button
        className={editorStyle?.input?.commonCancel?.styles?.className}
        style={editorStyle?.input?.commonCancel?.styles?.style}
        onClick={onCancel}
      >
        {editorStyle?.input?.commonCancel?.useIcon ? <Icon icon={<MdClose />} /> : "Cancel"}
      </button>
    </div>
  );
}
