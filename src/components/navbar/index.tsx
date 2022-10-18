import { Container } from "..";
import clsx from "clsx";
import { Avatar, Button } from "@nextui-org/react";
import { BellIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
export const Navbar = () => {
    const navigation = [
        { title: "Accounts", path: "/", permanent: true, disabled: false },
        { title: "Analytics", disabled: true },
        { title: "Updates", disabled: true },
    ];
    const router = useRouter();
    const { data } = useSession();
    const appURL = useMemo(
        () => `lol-showcase-app://${data?.user.token}`,
        [data],
    );
    return (
        <div className="w-full relative md:border-b pb-20 border-1 backdrop-blur-md	 border-borderColor">
            <Container>
                <nav className="flex md:pr-0 pr-4 items-start my-5">
                    <ul className="md:flex hidden  space-x-8 mt-1 items-center">
                        {navigation.map((item) => (
                            <li
                                className={clsx(
                                    "text-sm m-0 cursor-pointer hover:opacity-100 transition-all opacity-80",
                                    router.pathname === item.path
                                        ? "opacity-100 font-medium"
                                        : "",
                                    item.disabled &&
                                        "opacity-30 pointer-events-none",
                                )}
                                key={item.title}
                            >
                                {item.title}
                                <div
                                    className={clsx(
                                        "w-2 h-2 mt-1  bg-primary rounded-full mx-auto",
                                        router.pathname === item.path ||
                                            item.permanent
                                            ? "opacity-100"
                                            : "opacity-0",

                                        item.disabled &&
                                            "opacity-30 pointer-events-none",
                                    )}
                                ></div>
                            </li>
                        ))}
                    </ul>
                    <div className="ml-auto flex">
                        <Button as="a" href={appURL}>
                            Add Account
                        </Button>
                        <div
                            style={{ width: 1 }}
                            className="h-5 my-auto mx-5 bg-borderColor"
                        ></div>
                        <div className="flex space-x-5">
                            <Button
                                auto
                                light
                                icon={
                                    <BellIcon className="w-5 h-5 text-white" />
                                }
                            />
                            <Avatar src={data?.user.user.picture} />
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};
