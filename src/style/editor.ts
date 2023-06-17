import { IEditorStyle } from "./editor.type";

export const editorStyle: IEditorStyle = {
  editor: {
    styles: {
      style: {},
      className: "flex flex-col gap-1 w-full p-1 ",
    },
  },

  header: {
    main: {
      styles: {
        style: {},
        className: "flex items-center justify-center gap-1 text-2xl",
      },
    },
    sub: {
      styles: {
        style: {},
        className: "flex items-center justify-center gap-1 text-sm ",
      },
    },
  },

  input: {
    commonInput: {
      styles: {
        style: {},
        className:
          "bg-gray-200 appearance-none border-2 border-gray-200 rounded-l px-2 text-gray-700 text-sm focus:outline-none focus:bg-slate-100 focus:border-slate-500 w-full",
      },
    },
    commonSave: {
      useIcon: true,
      styles: {
        style: {},
        className: "bg-green-500 hover:bg-green-600 text-slate-900  px-2 transition-all",
      },
    },
    commonCancel: {
      useIcon: true,
      styles: {
        style: {},
        className: "bg-red-500 hover:bg-red-700 text-slate-900 px-2 rounded-r transition-all",
      },
    },
  },

  icons: {
    common: {
      styles: {
        style: {},
        className: "p-1 text-center",
      },
    },
    edit: {
      id: "editor-edit",
      styles: {
        style: {},
        className: "text-sm hover:text-slate-100 hover:bg-slate-500 hover:bg-opacity-100 rounded cursor-pointer",
      },
    },
  },
};
