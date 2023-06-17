import { IPreviewStyle } from "../style/preview.type";
import { IForm } from "../types/types";

interface IProps {
  state: IForm;
  setState: (form: IForm) => void;
  styles: IPreviewStyle;
}

export default function Preview({ state, setState, styles }: IProps) {
  return (
    <div className={styles?.editor?.styles?.className} style={styles?.editor.styles?.style}>
      <h1 className={styles?.header?.main?.styles?.className} style={styles?.header?.main?.styles?.style}>
        {state?.title}
      </h1>
      <p className={styles?.header?.sub?.styles?.className} style={styles?.header?.sub?.styles?.style}>
        {state.description}
      </p>
    </div>
  );
}
