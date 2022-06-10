import { Button } from "@nextui-org/react";
import { useState } from "react";

export const FlatSelect = ({
    onChange,
    options,
    title,
    children,
}: FlatSelectProps) => {
    const [selectedOption, setSelectedOption] = useState<string>();

    const handleChange = (option: string) => {
        if (onChange) onChange(option);
        setSelectedOption(option);
    };
    return (
        <div className="border py-5 px-4 rounded-md border-borderColor">
            <h4 className="uppercase text-sm font-semibold mb-4">{title}</h4>
            {children ? (
                children
            ) : (
                <div className="flex space-x-5">
                    {options.map((option, i) => (
                        <Button
                            key={`${i}-${option}`}
                            light={selectedOption !== option}
                            onClick={() => handleChange(option)}
                            style={{
                                height: 46,
                                minWidth: 55,
                                border: "solid 1px white",
                                textTransform: "uppercase",
                            }}
                            size={"sm"}
                        >
                            {option}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
};
interface FlatSelectProps {
    title: string;
    options: string[];
    children?: JSX.Element;
    onChange?: (option: string) => void;
}
