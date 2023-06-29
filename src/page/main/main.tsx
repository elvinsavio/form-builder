import { Editor } from '..';
import Viewer from '../viewer/viewer';

export default function Main() {
  return (
    <div className="m-1 flex gap-1">
      <Container>
        <Editor />
      </Container>
      <Container>
        <Viewer />
      </Container>
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 border p-1">{children}</div>;
}
