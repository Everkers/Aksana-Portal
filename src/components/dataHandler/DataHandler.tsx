import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { Loading } from "@nextui-org/react";
import { isEmpty } from "lodash";
import { UseQueryResult } from "react-query";

export const DataHandler = ({
    data,
    queryResult,
    children,
}: DataHandlerProps) => {
    if (queryResult.status === "loading") {
        return (
            <div className="flex mt-10 flex-col items-center space-y-3">
                {/* //eslint-disable-next-line
        //@ts-ignore */}
                <Loading size="lg" color={"white"} />
                <p className="opacity-90 tracking-normal">
                    Loading Your Data...
                </p>
            </div>
        );
    }
    if (
        (isEmpty(data) || isEmpty(data.accounts)) &&
        queryResult.status === "success"
    ) {
        return (
            <div className="flex mt-10 flex-col items-center space-y-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-14 h-14"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                </svg>
                <p className="opacity-90 tracking-normal">
                    The data appears to be empty.
                </p>
            </div>
        );
    }
    if (
        queryResult.status === "error" &&
        //eslint-disable-next-line
        //@ts-ignore
        queryResult.error.response.data.errors?.message === "Account not found"
    ) {
        return (
            <div className="flex mt-10 flex-col items-center space-y-3">
                <ExclamationCircleIcon className="w-14 text-red-500 h-14" />
                <p className="opacity-90 max-w-lg text-center text-red-500 tracking-normal">
                    Account Not Found
                </p>
            </div>
        );
    }
    if (queryResult.status === "error") {
        return (
            <div className="flex mt-10 flex-col items-center space-y-3">
                <ExclamationCircleIcon className="w-14 text-red-500 h-14" />
                <p className="opacity-90 max-w-lg text-center text-red-500 tracking-normal">
                    Something went wrong while trying to fetch data, our server
                    may be under maintenance.
                </p>
            </div>
        );
    }
    return children;
};
export interface DataHandlerProps {
    data: any;
    queryResult: UseQueryResult;
    children: JSX.Element;
}
