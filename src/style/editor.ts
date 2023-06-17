export interface IEditorStyle {
  header: {
    id?: string;
    styles?: {
      [x: string]: string;
    };
    className?: string;
  };

  icons: {
    edit: {
      id?: string;
      className?: string;
      styles?: {
        [x: string]: string;
      };
    };
  };
}

export const editorStyle: IEditorStyle = {
  header: {
    id: "editor-header",
    styles: {},
    className: "text-xl flex items-center justify-center gap-1",
  },

  icons: {
    edit: {
      id: "editor-edit",
      styles: {},
      className: " hover:text-slate-100 hover:bg-slate-500 hover:bg-opacity-100 rounded cursor-pointer p-1 text-center",
    },
  },
};
