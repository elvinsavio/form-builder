import { ReactNode, useState } from "react";
import Editor from "./editor/editor";
import { IForm } from "./types/types";
import { editorStyle } from "./style/editor";

export default function App() {
  const [form, setForm] = useState<IForm>({
    title: "New Form",
    editTitle: true,
    description: "New Form Description",
    editDescription: true,
    sections: [],
  });

  return (
    <AppContainer>
      <Container>
        <Header>Editor</Header>
        <Editor styles={editorStyle} state={form} setState={setForm} />
      </Container>

      <Container>
        <Header>Preview</Header>
      </Container>
    </AppContainer>
  );
}

function AppContainer({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-slate-900 p-2 flex text-white gap-3">{children}</div>;
}

function Container({ children }: { children: ReactNode }) {
  return <div className="container mx-auto border  border-slate-600 rounded shadow-lg">{children}</div>;
}

function Header({ children }: { children: ReactNode }) {
  return <h1 className="text-center text-2xl border-b border-b-slate-600 shadow-sm">{children}</h1>;
}
