export type IFieldTypes = "text" | "paragraph";

export interface IField {
  type: IField;
  question?: string;
  value?: string;
}

export interface ISection {
  title: string;
  description: string;
  fields: IField[];
}

export interface IForm {
  title: string;
  description: string;
  sections: ISection[];
}
