import clsx from "clsx";
import { Avatar, Button, Container, Popover } from "@nextui-org/react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useMemo } from "react";
import Link from "next/link";
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
                    <div className="flex mr-auto">
                        <Link href={"/"} passHref>
                            <a href={""}>
                                <svg
                                    className="mr-10 transition-all hover:fill-[#6941C6] "
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={40}
                                    height={40}
                                    viewBox="0 0 24 24"
                                    stroke-width={2}
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M3.262 10.878l8 8.789c.4 .44 1.091 .44 1.491 0l8 -8.79c.313 -.344 .349 -.859 .087 -1.243l-3.537 -5.194a1 1 0 0 0 -.823 -.436h-8.926a1 1 0 0 0 -.823 .436l-3.54 5.192c-.263 .385 -.227 .901 .087 1.246z"></path>
                                </svg>
                            </a>
                        </Link>
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
                    </div>
                    <div className="ml-auto flex">
                        <Button as="a" href={appURL}>
                            Add Account
                        </Button>
                        <div
                            style={{ width: 1 }}
                            className="h-5 my-auto mx-5 bg-borderColor"
                        ></div>
                        <Popover>
                            <Popover.Trigger>
                                <Avatar
                                    as="button"
                                    src={data?.user.user.picture}
                                />
                            </Popover.Trigger>
                            <Popover.Content>
                                <Button
                                    onClick={() => {
                                        signOut({ redirect: false });
                                        router.push("/login");
                                    }}
                                    flat
                                    color={"secondary"}
                                >
                                    Sign Out
                                </Button>
                            </Popover.Content>
                        </Popover>
                    </div>
                </nav>
            </Container>
        </div>
    );
};
