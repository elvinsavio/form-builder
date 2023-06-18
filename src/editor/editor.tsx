import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

import { IForm, ISection } from "../types/types";
import Icon from "../components/icon";
import { editorStyle } from "../style/editor";
import Input from "../components/input";
import { IEditorStyle } from "../style/editor.type";
import { Section } from "./section/section";
import SectionHeader from "./section/sectionHeader";

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
      editTitle: false,
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
      <EditorHeader
        styles={styles}
        edit={state?.editTitle}
        title={state?.title}
        toggleTitleEdit={toggleTitleEdit}
        handleTitleSave={handleTitleSave}
      />

      <EditorSubHeader
        styles={styles}
        edit={state?.editDescription}
        description={state?.description}
        toggleDescriptionEdit={toggleDescriptionEdit}
        handleDescriptionSave={handleDescriptionSave}
      />

      <Section
        items={state.sections}
        onChange={handlesSectionChange}
        renderItem={(item, index) => (
          <Section.Item id={item.id}>
            <Section.Header
              title={item?.title}
              edit={item?.editTitle}
              onDelete={() => 3}
              onSave={() => 3}
              toggleEdit={() => 5}
            >
              <Section.DragHandle />
            </Section.Header>
            Hello
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

interface IEditorHeader {
  styles: IEditorStyle;
  edit: boolean;
  title: string;
  toggleTitleEdit: () => void;
  handleTitleSave: (value: string) => void;
}
function EditorHeader({ styles, edit, title, toggleTitleEdit, handleTitleSave }: IEditorHeader) {
  return (
    <header style={styles?.header?.main?.styles?.style} className={styles?.header?.main?.styles?.className}>
      {edit ? (
        <Input value={title} onSave={handleTitleSave} onCancel={toggleTitleEdit} />
      ) : (
        <>
          {title}
          <Icon onClick={toggleTitleEdit} className={editorStyle?.icons?.edit?.styles?.className} icon={<FiEdit2 />} />
        </>
      )}
    </header>
  );
}

interface IEditorSubHeader {
  styles: IEditorStyle;
  edit: boolean;
  description: string;
  toggleDescriptionEdit: () => void;
  handleDescriptionSave: (value: string) => void;
}
function EditorSubHeader({
  styles,
  edit,
  description,
  toggleDescriptionEdit,
  handleDescriptionSave,
}: IEditorSubHeader) {
  return (
    <small style={styles?.header?.sub?.styles?.style} className={styles?.header?.sub?.styles?.className}>
      {edit ? (
        <Input value={description} onSave={handleDescriptionSave} onCancel={toggleDescriptionEdit} />
      ) : (
        <>
          {description}
          <Icon
            onClick={toggleDescriptionEdit}
            className={editorStyle?.icons?.edit?.styles?.className}
            icon={<FiEdit2 />}
          />
        </>
      )}
    </small>
  );
}
