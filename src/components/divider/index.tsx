import clsx from "clsx";
export const Divider = ({
    disableMargin = false,
}: {
    disableMargin?: boolean;
}) => {
    return (
        <div
            style={{ height: 1 }}
            className={clsx(
                "w-full bg-borderColor",
                !disableMargin ? "my-5" : "",
            )}
        ></div>
    );
};
