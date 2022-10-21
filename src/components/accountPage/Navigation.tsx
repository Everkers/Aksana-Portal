import { Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Fragment } from "react";

export type AccountNavigationTab = { name: string; component?: any };
export const AccountNavigation = ({
    tabs,
    current,
    onChange,
    className,
}: {
    tabs: AccountNavigationTab[];
    current: number;
    onChange: (val: number) => void;
    className?: string;
}) => {
    return (
        <div className={clsx(className)}>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* onChange={(e) => onChange(+e.target.value)} */}
                <Menu
                    as="div"
                    className="relative inline-block w-full text-left"
                >
                    <div className="w-full">
                        <Menu.Button className="flex w-full rounded-md  border-gray-300 bg-transparent border py-2 pl-3 pr-3 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm">
                            <span>
                                {tabs.find((tab, i) => i === current)?.name}
                            </span>
                            <ChevronDownIcon
                                className="ml-auto my-auto h-5 w-5"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute w-full overflow-hidden right-0 z-[999] mt-2  origin-top-right rounded-md bg-gray-900  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div>
                                {tabs.map((tab, i) => (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => onChange(i)}
                                                className={clsx(
                                                    " px-4 text-gray-100 flex text-left py-2 w-full text-sm",
                                                    i !== tabs.length - 1 &&
                                                        "border-b border-gray-800",
                                                    active && "bg-gray-700",
                                                    current === i &&
                                                        "bg-primary hover:bg-primary",
                                                )}
                                            >
                                                {tab.name}
                                                {current === i && (
                                                    <CheckIcon className="w-5 ml-auto" />
                                                )}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                {/* {tabs.find((tab, i) => i === current)?.name}{" "} */}
                {/* {tabs.map((tab, i) => (
                        <option value={i} key={tab.name}>
                            {tab.name}
                        </option>
                    ))} */}
            </div>
            <div className="hidden sm:block">
                <div className="border-b flex border-[#252525]">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab, i) => (
                            <button
                                onClick={() => onChange(i)}
                                key={tab.name}
                                className={clsx(
                                    i === current
                                        ? "border-primary white"
                                        : "border-transparent opacity-40 transition-all duration-300 hover:opacity-80 hover:border-gray-300",
                                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
                                )}
                                aria-current={
                                    i === current ? "page" : undefined
                                }
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};
