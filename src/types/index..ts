export interface ObjectString {
    [key: string]: string;
}
export interface ObjectStringNumber {
    [key: string]: string|number;
}

export type ReactElementType = React.JSX.Element
export type ReactFCType<T> = React.FC<T>
export type ReactChildrenType = React.ReactNode

export interface ThemeColorsType {
    primary: string;
    secondary: string;
    background: string;
    neutral: string;
    text: string;
    accent: string;
    error: string;
    warning: string;
    success: string;
    info: string;
  }