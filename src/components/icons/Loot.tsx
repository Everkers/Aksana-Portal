import * as React from "react";

function SvgLoot(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill="#e36308"
                d="M146.857 20.842c-12.535-.036-24.268 2.86-37.285 9.424h.004C61.356 54.6 19.966 120.734 17.982 175.91l41.848 14.236c4.33-61.89 47.057-128.37 101.527-155.86h.002a133.652 133.652 0 0113.185-5.8l-22.26-7.45a83.687 83.687 0 00-5.428-.194zm59.34 20.19c-10.478-.09-22.832 3.093-36.424 9.943l.004-.004c-48.23 24.34-89.625 90.513-91.548 145.436l156.485 53.24c3.865-62.22 46.797-129.372 101.613-157.035h.002l.002-.003a134.399 134.399 0 0112.832-5.666l-134.54-45.036a43.905 43.905 0 00-8.427-.873zm174.97 58.323c-10.476-.09-22.83 3.092-36.42 9.94l-.005.002c-48.577 24.518-90.225 91.473-91.586 146.623l46.205 15.72c3.914-62.188 46.825-129.274 101.607-156.92a128.588 128.588 0 0113.53-5.91l-26.544-8.884a44.788 44.788 0 00-6.785-.57zm63.554 22.014c-10.267.093-22.094 3.353-35.333 10.034-47.158 23.8-87.777 87.587-91.362 141.75l174.55-73.726c-.404-39.01-10.754-61.304-24.415-71.082a36.057 36.057 0 00-7.55-4.137l-.01.034-4.735-1.584c-3.48-.887-7.195-1.327-11.144-1.29zM17.9 195.622l-.035 187.484L59.46 397.58V209.764l-41.56-14.14zm60.25 20.498v187.962l156.282 54.37V269.288l-29.053-9.886v119.43L104.325 344.75V225.025L78.15 216.12zm414.22 3.683L318.433 293.27v189.236l173.935-73.504v-189.2zm-369.354 11.582v99.947l63.675 21.477v-99.763l-63.674-21.662zm31.306 28.797c9.705 0 17.573 7.867 17.573 17.572 0 6.34-3.37 11.88-8.407 14.97v28.53h-18.69v-28.746c-4.838-3.13-8.048-8.562-8.048-14.754 0-9.705 7.867-17.572 17.572-17.572zm98.797 15.464v189.307l46.626 16.22V291.51l-46.627-15.864z"
            />
        </svg>
    );
}

export default SvgLoot;