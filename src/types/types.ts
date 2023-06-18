export type IFieldTypes = "text" | "paragraph";

export interface IField {
  type: IField;
  question?: string;
  value?: string;
}

export interface ISection {
  id: string;
  title: string;
  editTitle: boolean;
  fields: IField[];
  open: boolean;
}

export interface IForm {
  title: string;
  editTitle: boolean;
  description: string;
  editDescription: boolean;
  sections: ISection[];
}
