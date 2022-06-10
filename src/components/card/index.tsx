import SvgBlueEssenceIcon from "@components/icons/BlueEssenceIcon";
import SvgChampionsIcon from "@components/icons/ChampionsIcon";
import SvgRpIcon from "@components/icons/RpIcon";
import SvgSkinIcon from "@components/icons/SkinIcon";
import SvgUnrankedIcon from "@components/icons/UnrankedIcon";
import { ArrowRightIcon, GlobeIcon } from "@heroicons/react/solid";
import { Button } from "@nextui-org/react";
import clsx from "clsx";

const cardContent = [
    {
        title: "champions",
        icon: SvgChampionsIcon,
        value: 39,
    },
    {
        title: "skins",
        icon: SvgSkinIcon,
        value: 10,
    },
    {
        title: "Blue essence",
        icon: SvgBlueEssenceIcon,
        value: 39,
    },
    {
        title: "riot points",
        icon: SvgRpIcon,
        value: 1000,
    },
    {
        title: "last season rank",
        icon: SvgUnrankedIcon,
        value: "Diamond II",
        customWidth: 27,
    },
];
export const Card = () => {
    return (
        <div className=" hover:border-primary border  border-cardColor duration-500 cursor-pointer transition-all bg-cardColor space-y-5 p-5 rounded-md ">
            <div className=" w-full relative flex">
                <div className="flex items-center space-x-3">
                    <img
                        className="w-16"
                        src={
                            "https://i.pinimg.com/originals/69/61/ab/6961ab1af799f02df28fa74278d78120.png"
                        }
                    />
                    <div className="">
                        <sub className="text-secondary">Rank</sub>
                        <h1 className="text-lg font-medium">Master</h1>
                    </div>
                </div>
                <div className="flex ml-auto items-center space-x-1 self-start">
                    <span className="text-xs text-[#C6C6C6]">EUW</span>
                    <GlobeIcon className="w-5 h-5 text-[#484848]" />
                </div>
            </div>
            <div className="grid grid-cols-2  gap-4">
                {cardContent.map((item, i) => (
                    <div
                        className={clsx(
                            "flex items-center  space-x-3",
                            i + 1 === cardContent.length ? "col-span-2" : "",
                        )}
                    >
                        <item.icon width={item.customWidth || 20} />
                        <div className="space-y-1">
                            <sub className="text-secondary uppercase font-semibold">
                                {item.title}
                            </sub>
                            <h1 className="text-lg font-semibold">
                                {item.value}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold">200$</h1>
                <Button
                    className="ml-auto"
                    auto
                    icon={<ArrowRightIcon className="w-5 h-5 text-white" />}
                />{" "}
            </div>
        </div>
    );
};
