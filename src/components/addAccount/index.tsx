import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SvgLogo from "@components/icons/Logo";
import clsx from "clsx";
export const AddAccount = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
    url: string;
}) => {
    const [downloaded, setDownload] = useState<boolean>(false);
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = process.env.NEXT_PUBLIC_RELEASE_URL || "";
        link.download = "Aksana.exe";
        link.click();
        setDownload(true);
    };
    const handleClose = () => {
        localStorage.setItem("passed", "1");
        onClose();
        setDownload(false);
    };
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#222222] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    {!downloaded && (
                                        <SvgLogo className="w-32 mx-auto" />
                                    )}

                                    <div
                                        className={clsx(
                                            "flex justify-center mb-4",
                                            !downloaded && "hidden",
                                        )}
                                    >
                                        <iframe
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight={0}
                                            marginWidth={0}
                                            allow="fullscreen"
                                            src={`https://www.youtube.com/embed/${
                                                process.env
                                                    .NEXT_PUBLIC_TUTORIAL ||
                                                "1tLfYpxk9V4"
                                            }?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&start=0&end=0`}
                                        ></iframe>
                                    </div>

                                    {!downloaded ? (
                                        <div className="mt-1 text-center">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg tracking-normal font-medium leading-6 text-white"
                                            >
                                                Adding Your First Account
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-400 tracking-normal">
                                                    To add your account you will
                                                    have to install our desktop
                                                    application
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mt-1 text-center">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg tracking-normal font-medium leading-6 text-white"
                                            >
                                                How does it work?
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-400 tracking-normal">
                                                    This tutorial will explain
                                                    to you step by step, how to
                                                    add an account to aksana
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-5 sm:mt-6 space-y-3">
                                    {!downloaded ? (
                                        <>
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent transition-all bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 outline-none sm:text-sm"
                                                onClick={handleDownload}
                                            >
                                                Download And Continue
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent transition-all bg-[#1e1e1e] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-70 outline-none  sm:text-sm"
                                                onClick={handleClose}
                                            >
                                                I have It
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent transition-all bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 outline-none sm:text-sm"
                                            onClick={handleClose}
                                        >
                                            I understand
                                        </button>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
