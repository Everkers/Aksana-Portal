import { InformationCircleIcon } from "@heroicons/react/solid";

export const Alert = ({ message }: { message: string }) => {
    return (
        <div className="rounded-md bg-gray-900 bg-opacity-40 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <InformationCircleIcon
                        className="h-5 w-5 text-white opacity-80"
                        aria-hidden="true"
                    />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm tracking-tight text-white opacity-80">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
};
