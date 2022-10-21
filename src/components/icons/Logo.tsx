import * as React from "react";

function SvgLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 502 502"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68.2302 227.531L235.564 411.368C243.93 420.571 258.384 420.571 266.75 411.368L434.084 227.511C440.63 220.315 441.384 209.543 435.903 201.511L361.921 92.87C358.035 87.1804 351.597 83.7695 344.707 83.7503H158.005C151.115 83.7695 144.676 87.1804 140.79 92.87L66.7451 201.469C61.244 209.522 61.997 220.315 68.5648 227.531H68.2302Z"
                fill="#6941C6"
                stroke="white"
                stroke-width="24"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export default SvgLogo;
