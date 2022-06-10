import { Container } from "..";
import clsx from "clsx";
import { Avatar, Button } from "@nextui-org/react";
import { BellIcon } from "@heroicons/react/solid";
export const Navbar = () => {
    const navigation = [
        { title: "Feed", selected: true },
        { title: "Analytics" },
        { title: "Updates" },
    ];
    return (
        <div className="w-full relative md:border-b pb-20 border-1 backdrop-blur-md	 border-borderColor">
            <Container>
                <nav className="flex md:pr-0 pr-4 items-start my-5">
                    <ul className="md:flex hidden  space-x-8 mt-1 items-center">
                        {navigation.map((item) => (
                            <li
                                className={clsx(
                                    "text-sm m-0 cursor-pointer hover:opacity-100 transition-all opacity-80",
                                    item.selected
                                        ? "opacity-100 font-medium"
                                        : "",
                                )}
                                key={item.title}
                            >
                                {item.title}
                                <div
                                    className={clsx(
                                        "w-2 h-2 mt-1  bg-primary rounded-full mx-auto",
                                        item.selected
                                            ? "opacity-100"
                                            : "opacity-0",
                                    )}
                                ></div>
                            </li>
                        ))}
                    </ul>
                    <div className="ml-auto flex">
                        <Button>Add Account</Button>
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
                            <Avatar src="https://64.media.tumblr.com/e050c997a7b3939c006c3fae701e8848/tumblr_pphkqs7Dac1vo6vclo1_400.jpg" />
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};
