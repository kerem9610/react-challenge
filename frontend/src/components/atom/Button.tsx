import React from 'react';
import classNames from "classnames";

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type ButtonProps = {
    className: string;
    children: React.ReactNode;
    variant: ButtonVariant;
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ onClick, variant, className, children, ...restProps }: ButtonProps) => {
    const classes = classNames("flex justify-center items-center gap-2 text-white", {
        "bg-blue-500 hover:bg-blue-700": variant === ButtonVariant.PRIMARY,
        "bg-slate-900 hover:bg-slate-950": variant === ButtonVariant.SECONDARY
    });

    return (
        <button
            className={`${classes} ${className}`}
            onClick={onClick}
            {...restProps}>
            {children}
        </button>
    );
};
