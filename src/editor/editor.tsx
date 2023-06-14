import { AiOutlinePlusCircle } from "react-icons/ai";
import { IForm } from "../types/types";
import { ReactNode } from "react";

interface IProps {
  state: IForm;
  setState: (state: IForm) => void;
}

export default function Editor({ state, setState }: IProps) {
  const handleAddNewSection = () => {
    const tempState = { ...state };
    tempState.sections = tempState.sections || [];
    tempState.sections.push({
      title: "New Section",
      description: "New Section Description",
      fields: [],
    });
    setState(tempState);
  };

  return (
    <FormContainer>
      this is the editor
      {state.sections?.map((section, index) => (
        <SectionContainer key={index}>{index}</SectionContainer>
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
      className=" p-1 py-3 rounded border-dotted border border-slate-600 hover:border-slate-200 cursor-pointer"
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
