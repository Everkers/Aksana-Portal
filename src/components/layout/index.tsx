import { ChevronLeftIcon } from "@heroicons/react/solid";
import { Button, Container } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import { Navbar } from "..";

const Layout = ({
    children,
    navbar = true,
}: {
    children: JSX.Element;
    navbar?: boolean;
}) => {
    return (
        <>
            <div>
                {/* <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 md:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-background  " />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex-1 flex flex-col  w-full pt-5 pb-4 ">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <XIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={clsx(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                        "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                                                    )}
                                                >
                                                    <item.icon
                                                        className={clsx(
                                                            item.current
                                                                ? "text-gray-300"
                                                                : "text-gray-400 group-hover:text-gray-300",
                                                            "mr-4 flex-shrink-0 h-6 w-6",
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div
                                className="flex-shrink-0 w-14"
                                aria-hidden="true"
                            ></div>
                        </div>
                    </Dialog>
                </Transition.Root> */}

                {/* Static sidebar for desktop */}
                {/* <div className="hidden md:flex border-r border-1 border-borderColor md:w-64 md:flex-col md:fixed md:inset-y-0">
                    <div className="flex-1 flex flex-col min-h-0 ">
                        <div className="flex items-center pt-5 h-16 flex-shrink-0 px-4">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                alt="Workflow"
                            />
                        </div>
                        <div className="flex-1 flex flex-col overflow-y-auto">
                            <nav className="flex-1 px-2 py-4 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={clsx(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-900 hover:text-white",
                                            "group flex pointer-events-none opacity-20 items-center px-2 py-2 text-sm font-medium rounded-md",
                                        )}
                                    >
                                        <item.icon
                                            className={clsx(
                                                item.current
                                                    ? "text-gray-300"
                                                    : "text-gray-400 group-hover:text-gray-300",
                                                "mr-3 flex-shrink-0 h-6 w-6",
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div> */}
                <div className=" flex flex-col">
                    <div
                        className={clsx(
                            "top-0 z-[90] flex-shrink-0 flex h-16",
                            navbar && "sticky",
                        )}
                    >
                        {/* <button
                            type="button"
                            className="px-4  text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button> */}
                        {navbar ? (
                            <div className="flex-1  flex justify-between">
                                <Navbar />
                            </div>
                        ) : (
                            <div className="h-[90px] w-full">
                                <Container className="h-full flex items-center">
                                    <Link href={"/"}>
                                        <a href={""}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-chevron-left"
                                                width={40}
                                                height={40}
                                                viewBox="0 0 24 24"
                                                stroke-width={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <polyline points="15 6 9 12 15 18"></polyline>
                                            </svg>
                                        </a>
                                    </Link>
                                </Container>
                            </div>
                        )}
                    </div>

                    <main className="flex-1 relative">
                        <div className="py-6">
                            <div>{children}</div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};
export default Layout;
