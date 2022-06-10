import React from "react";

export const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <div className="max-w-2xl">
            <h1 className="text-4xl font-medium mb-1 capitalize">{title}</h1>
            {subtitle && <p className="text-secondaryText">{subtitle}</p>}
        </div>
    );
};

interface HeaderProps {
    title: string;
    subtitle?: string;
}
