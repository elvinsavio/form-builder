import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

import { IForm, ISection } from "../types/types";
import Icon from "../components/icon";
import { editorStyle } from "../style/editor";
import Input from "../components/input";
import { IEditorStyle } from "../style/editor.type";
import { Section } from "./section/section";

interface IProps {
  state: IForm;
  setState: (state: IForm) => void;
  styles: IEditorStyle;
}

const genUUID = () => {
  return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(16);
  });
};

export default function Editor({ state, setState, styles }: IProps) {
  const handleAddNewSection = () => {
    const tempState = { ...state };
    tempState.sections = tempState.sections || [];
    tempState.sections.push({
      id: genUUID(),
      title: "New Section",
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

  const handleTitleSave = (value: string) => {
    const tempState = { ...state };
    tempState.title = value;
    tempState.editTitle = false;
    setState(tempState);
  };

  const toggleDescriptionEdit = () => {
    const tempState = { ...state };
    tempState.editDescription = !tempState.editDescription;
    setState(tempState);
  };

  const handleDescriptionSave = (value: string) => {
    const tempState = { ...state };
    tempState.description = value;
    tempState.editDescription = false;
    setState(tempState);
  };

  const handlesSectionChange = (sections: ISection[]) => {
    const tempState = { ...state };
    tempState.sections = sections;
    setState(tempState);
  };

  return (
    <div className={styles?.editor?.styles?.className} style={styles?.editor.styles?.style}>
      <header style={styles?.header?.main?.styles?.style} className={styles?.header?.main?.styles?.className}>
        {state?.editTitle ? (
          <Input value={state.title} onSave={handleTitleSave} onCancel={toggleTitleEdit} />
        ) : (
          <>
            {state?.title}
            <Icon
              onClick={toggleTitleEdit}
              className={editorStyle?.icons?.edit?.styles?.className}
              icon={<FiEdit2 />}
            />
          </>
        )}
      </header>

      <small style={styles?.header?.sub?.styles?.style} className={styles?.header?.sub?.styles?.className}>
        {state?.editDescription ? (
          <Input value={state?.description} onSave={handleDescriptionSave} onCancel={toggleDescriptionEdit} />
        ) : (
          <>
            {state?.description}
            <Icon
              onClick={toggleDescriptionEdit}
              className={editorStyle?.icons?.edit?.styles?.className}
              icon={<FiEdit2 />}
            />
          </>
        )}
      </small>
      <Section
        items={state.sections}
        onChange={handlesSectionChange}
        renderItem={(item) => (
          <Section.Item id={item.id}>
            <div>
              <div className="flex justify-between">
                {item.title}
                <Section.DragHandle />
              </div>
              hello world
            </div>
          </Section.Item>
        )}
      />
      <AddNewSection onClick={handleAddNewSection} />
    </div>
  );
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

// {state.sections?.map((section, index) => (
//   <SectionContainer key={index}>
//     <SectionHeader>
//       {index + 1} {section.title} -{" "}
//     </SectionHeader>
//     <small className="p-1 text-gray-300">
//       {section.description}- {section.fields?.length} fields
//     </small>
//   </SectionContainer>
// ))}
// function SectionContainer({ children }: { children: ReactNode }) {
//   return (
//     <div className="flex flex-col gap-2  border border-slate-600 hover:border-slate-500 p-1 rounded transition-all">
//       {children}
//     </div>
//   );
// }

// function SectionHeader({ children }: { children: ReactNode }) {
//   return (
//     <div className="flex items-center justify-between ">
//       <div className="flex items-center gap-1">
//         <MdOutlineExpandMore className="text-2xl hover:text-slate-100 hover:bg-slate-500 hover:bg-opacity-100 rounded cursor-pointer" />
//         <header className="text">{children} </header>
//       </div>
//       hello
//     </div>
//   );
// }
