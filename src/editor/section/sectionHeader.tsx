import { ReactNode } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Icon from "../../components/icon";
import Input from "../../components/input";
import { editorStyle } from "../../style/editor";

interface IProps {
  title: string;
  edit: boolean;
  onSave: (value: string) => void;
  onDelete: () => void;
  toggleEdit: () => void;
  children: ReactNode;
}

export default function SectionHeader({ title, edit, toggleEdit, onSave, onDelete, children }: IProps) {
  return (
    <div
      className={editorStyle?.section?.header?.container?.styles?.className}
      style={editorStyle?.section?.header?.container?.styles?.style}
    >
      {edit ? (
        <Input value={title} onSave={onSave} onCancel={toggleEdit} />
      ) : (
        <>
          {children}

          <div
            className={editorStyle?.section?.header?.title?.styles?.className}
            style={editorStyle?.section?.header?.title?.styles?.style}
          >
            {title}
          </div>
          <div className="flex">
            <Icon
              onClick={onDelete}
              tooltip="Delete section"
              className={editorStyle?.section?.header?.deleteIcon?.styles?.className}
              style={editorStyle?.section?.header?.deleteIcon?.styles?.style}
              icon={<MdDelete />}
            />
            <Icon
              onClick={toggleEdit}
              tooltip="Edit section"
              className={editorStyle?.section?.header?.editIcon?.styles?.className}
              style={editorStyle?.section?.header?.editIcon?.styles?.style}
              icon={<FiEdit2 />}
            />
          </div>
        </>
      )}
    </div>
  );
}
