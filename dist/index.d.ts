/// <reference types="react" />
type Option = {
    value: string;
    element: JSX.Element | string;
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
    zIndex?: number;
    notchIcon?: JSX.Element;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map