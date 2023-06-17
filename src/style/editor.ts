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

export const editorStyle: IEditorStyle = {
  header: {
    id: "editor-header",
    styles: {
      style: {},
      className: "text-xl flex items-center justify-center gap-1",
    },
  },

  icons: {
    common: {
      styles: {
        style: {},
        className:
          "hover:text-slate-100 hover:bg-slate-500 hover:bg-opacity-100 rounded cursor-pointer p-1 text-center",
      },
    },
    edit: {
      id: "editor-edit",
      styles: {
        style: {},
        className: "text-",
      },
    },
  },
};
