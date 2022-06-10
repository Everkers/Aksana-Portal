import * as React from "react";
import { SVGProps } from "react";

const SvgSkinIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M2.833 4.958h8.5a.708.708 0 0 1 .709.709v3.187a1.77 1.77 0 0 1-1.771 1.771h-.354A1.417 1.417 0 0 1 8.5 9.208a1.417 1.417 0 0 0-2.833 0 1.417 1.417 0 0 1-1.417 1.417h-.354a1.77 1.77 0 0 1-1.771-1.77V5.666a.708.708 0 0 1 .708-.709v0Z"
            stroke="#FBBF24"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.083 12.042A1.417 1.417 0 0 0 8.5 13.458h2.48a3.896 3.896 0 0 0 3.895-3.896V2.833"
            stroke="#FBBF24"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SvgSkinIcon;
