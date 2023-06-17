interface IStyle {
  style?: {
    [x: string]: string;
  };
  className?: string;
}

export interface IPreviewStyle {
  editor: {
    styles?: IStyle;
  };
  header: {
    main: {
      styles: IStyle;
    };
    sub: {
      styles: IStyle;
    };
  };
}
