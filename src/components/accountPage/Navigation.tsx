import clsx from "clsx";

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
                <select
                    id="tabs"
                    name="tabs"
                    onChange={(e) => onChange(+e.target.value)}
                    className="block w-full rounded-md  border-gray-300 bg-transparent border py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    defaultValue={tabs.find((tab, i) => i === current)?.name}
                >
                    {tabs.map((tab, i) => (
                        <option value={i} key={tab.name}>
                            {tab.name}
                        </option>
                    ))}
                </select>
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
