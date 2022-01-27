import React, { ReactNode } from "react";
import { PushedProps } from "../types";
interface Props extends PushedProps {
    label: string;
    icon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    children: ReactNode;
    inSpirit?: string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;