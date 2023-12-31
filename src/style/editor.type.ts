import { CSSProperties } from "react";

interface IStyle {
  style?: CSSProperties;
  className?: string;
}
export interface IEditorStyle {
  editor?: {
    styles?: IStyle;
  };

  header: {
    main?: {
      styles?: IStyle;
    };
    sub?: {
      styles?: IStyle;
    };
  };

  input?: {
    commonInput?: {
      styles?: IStyle;
    };
    commonSave?: {
      useIcon?: boolean;
      styles?: IStyle;
    };
    commonCancel?: {
      useIcon?: boolean;
      styles?: IStyle;
    };
  };

  icons?: {
    common?: {
      styles?: IStyle;
    };
    edit?: {
      id?: string;
      styles?: IStyle;
    };
  };

  section?: {
    container?: {
      styles?: IStyle;
    };

    header?: {
      container?: {
        styles?: IStyle;
      };
      title?: {
        styles?: IStyle;
      };
      deleteIcon?: {
        styles?: IStyle;
      };
      editIcon?: {
        styles?: IStyle;
      };
    };
  };

  tooltip?: {
    styles?: IStyle;
  };
}
