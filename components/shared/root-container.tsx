import { cn } from "@/lib/utils";
import React from "react";


interface Props {
    className?: string;
}

export const RootContainer: React.FC<React.PropsWithChildren<Props>> = ({className, children}) => {
    return <div className={cn('mx-auto w-full 3xl:px-0', className)}>{children}</div>
}