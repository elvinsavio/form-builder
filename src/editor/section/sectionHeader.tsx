import { ReactNode } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Icon from "../../components/icon";
import Input from "../../components/input";

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
    <div className="flex justify-between items-center border-b-slate-200 border-b pb-1 mb-1">
      {edit ? (
        <Input value={title} onSave={onSave} onCancel={toggleEdit} />
      ) : (
        <>
          <div>{title}</div>
          <div className="flex">
            <Icon onClick={onDelete} className="text-red-600 hover:bg-red-500 hover:text-white" icon={<MdDelete />} />
            <Icon onClick={toggleEdit} className="hover:bg-slate-500" icon={<FiEdit2 />} />
            {children}
          </div>
        </>
      )}
    </div>
  );
}
