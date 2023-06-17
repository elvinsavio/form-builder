interface IStyle {
  style?: {
    [x: string]: string;
  };
  className?: string;
}
export interface IEditorStyle {
  header: {
    id?: string;
    styles?: IStyle;
  };

  input: {
    commonInput: {
      styles?: IStyle;
    };
    commonSave: {
      useIcon?: boolean;
      styles?: IStyle;
    };
    commonCancel: {
      useIcon?: boolean;
      styles?: IStyle;
    };
  };

  icons: {
    common: {
      styles?: IStyle;
    };
    edit: {
      id?: string;
      styles?: IStyle;
    };
  };
}
