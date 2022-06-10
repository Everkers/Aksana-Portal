import * as React from "react";
import { SVGProps } from "react";

const SvgBlueEssenceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <path fill="url(#rp-icon_svg__a)" d="M0 0h14v14H0z" />
        <defs>
            <pattern
                id="rp-icon_svg__a"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#rp-icon_svg__b" transform="scale(.00667)" />
            </pattern>
            <image
                id="rp-icon_svg__b"
                width={150}
                height={150}
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export default SvgBlueEssenceIcon;
