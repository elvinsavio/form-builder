import { IPreviewStyle } from "./preview.type";

export const previewStyle: IPreviewStyle = {
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
        className: "text-center text-2xl font-bold",
      },
    },
    sub: {
      styles: {
        style: {},
        className: "text-center text-sm font-bold",
      },
    },
  },
};
