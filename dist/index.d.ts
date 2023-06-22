import { ReactNode } from "react";
type Option = {
    value: string;
    element: ReactNode;
};
export default function Select(props: {
    transitionDuration?: number;
    optionHeight?: number;
    gapBetweenSelectedOptionAndList?: number;
    value: string;
    options: Option[];
    onChange(value: string): void;
    wrapperClassName?: string;
    selectedOptionClassName?: string;
    optionsListClassName?: string;
    notchIcon?: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map