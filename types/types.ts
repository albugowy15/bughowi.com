export interface Button {
  url: string;
  title: string;
}

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form
  message?: string
}