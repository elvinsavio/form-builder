import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

import { IForm } from "../types/types";
import { ReactNode } from "react";
import Icon from "../components/icon";
import { IEditorStyle, editorStyle } from "../style/editor";

interface IProps {
  state: IForm;
  setState: (state: IForm) => void;
  styles: IEditorStyle;
}

export default function Editor({ state, setState, styles }: IProps) {
  const handleAddNewSection = () => {
    const tempState = { ...state };
    tempState.sections = tempState.sections || [];
    tempState.sections.push({
      title: "New Section",
      description: "New Section Description",
      fields: [],
      open: true,
    });
    setState(tempState);
  };

  const toggleTitleEdit = () => {
    const tempState = { ...state };
    tempState.editTitle = !tempState.editTitle;
    setState(tempState);
  };

  const toggleDescriptionEdit = () => {
    const tempState = { ...state };
    tempState.editDescription = !tempState.editDescription;
    setState(tempState);
  };

  return (
    <FormContainer>
      <header
        id={styles.header?.id}
        style={styles?.header?.styles?.style}
        className={styles?.header?.styles?.className}
      >
        {state.title} {state.editTitle ? "edit" : "not edit"}
        <Icon onClick={toggleTitleEdit} icon={<FiEdit2 className={editorStyle.icons.edit.styles?.className} />} />
      </header>

      <small className="flex items-center justify-center gap-1  mb-1 border-b pb-1 border-b-slate-600">
        {state.description} <Icon onClick={toggleDescriptionEdit} icon={<FiEdit2 className="text-xs" />} />
      </small>
      {state.sections?.map((section, index) => (
        <SectionContainer key={index}>
          <SectionHeader>
            {index + 1} {section.title} -{" "}
          </SectionHeader>
          <small className="p-1 text-gray-300">
            {section.description}- {section.fields?.length} fields
          </small>
        </SectionContainer>
      ))}
      <AddNewSection onClick={handleAddNewSection} />
    </FormContainer>
  );
}

function FormContainer({ children }: { children: ReactNode }) {
  return <div className="flex flex-col p-1 gap-1 ">{children}</div>;
}

function AddNewSection({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      id="add-new-section"
      className=" p-1 py-3 rounded border-dotted border border-slate-600 hover:bg-slate-800 cursor-pointer"
    >
      <span className="flex items-center justify-center gap-1">
        Add new section
        <AiOutlinePlusCircle />
      </span>
    </button>
  );
}

function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2  border border-slate-600 hover:border-slate-500 p-1 rounded transition-all">
      {children}
    </div>
  );
}

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-1">
        <MdOutlineExpandMore className="text-2xl hover:text-slate-100 hover:bg-slate-500 hover:bg-opacity-100 rounded cursor-pointer" />
        <header className="text">{children} </header>
      </div>
      hello
    </div>
  );
}
