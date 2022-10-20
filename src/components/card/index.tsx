import SvgBlueEssenceIcon from "@components/icons/BlueEssenceIcon";
import SvgChampionsIcon from "@components/icons/ChampionsIcon";
import SvgLoot from "@components/icons/Loot";
import SvgRpIcon from "@components/icons/RpIcon";
import SvgSkinIcon from "@components/icons/SkinIcon";
import SvgUnrankedIcon from "@components/icons/UnrankedIcon";
import { ArrowRightIcon, GlobeIcon } from "@heroicons/react/solid";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import { useMemo } from "react";

export const Card = ({ account }: { account: any }) => {
    const rankedBanner = useMemo(() => {
        return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-${account.rankedStats.highestRankedEntrySR.tier.toLowerCase()}.png`;
    }, [account]);
    const accountProperties = useMemo(() => {
        const amountOfSkins = account.championsWithSkins.reduce(
            (a: any, b: any) => a + b.skins.length,
            0,
        );
        const amountOfSkinsInLoot = account.loot.filter(
            (item: any) =>
                item.disenchantLootName === "CURRENCY_cosmetic" &&
                item.displayCategories === "SKIN",
        );

        return [
            {
                title: "champions",
                icon: SvgChampionsIcon,
                value: account.championsWithSkins.length,
            },
            {
                title: "skins",
                icon: SvgSkinIcon,
                value: amountOfSkins,
            },
            {
                title: "Blue essence",
                icon: SvgBlueEssenceIcon,
                value: account.allCurrencies.lol_blue_essence,
            },
            {
                title: "riot points",
                icon: SvgRpIcon,
                value: account.RP.RP,
            },
            {
                title: "Honor Level",
                icon: SvgUnrankedIcon,
                customWidth: 27,
                value: `Level ${account.honorLevel.honorLevel}`,
            },
            {
                title: "Skins In Loot",
                icon: SvgLoot,
                value: amountOfSkinsInLoot.length,
            },
        ];
    }, [account]);
    return (
        <Link href={`/account/${account.id}`}>
            <div className=" hover:border-primary border  border-cardColor duration-500 cursor-pointer transition-all bg-cardColor space-y-5 p-5 rounded-md ">
                <div className=" w-full relative flex">
                    <div className="flex items-center space-x-3">
                        <img
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.className = "w-14";
                                currentTarget.src =
                                    "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/border-unranked.png";
                            }}
                            className="w-16 scale-[3.9] mt-4"
                            src={rankedBanner}
                        />
                        <div className="">
                            <sub className="text-secondary">Rank</sub>
                            <h1 className="text-lg font-medium capitalize">
                                {account.rankedStats.highestRankedEntrySR.tier}
                            </h1>
                        </div>
                    </div>
                    <div className="flex ml-auto items-center space-x-1 self-start">
                        <span className="text-xs text-[#C6C6C6]">EUW</span>
                        <GlobeIcon className="w-5 h-5 text-[#484848]" />
                    </div>
                </div>
                <div className="grid grid-cols-2  gap-4">
                    {accountProperties.map((item, i) => (
                        <div className={clsx("flex items-center  space-x-3")}>
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
                    <h1 className="text-2xl font-semibold">N/A</h1>
                    <Button
                        className="ml-auto"
                        auto
                        icon={<ArrowRightIcon className="w-5 h-5 text-white" />}
                    />{" "}
                </div>
            </div>
        </Link>
    );
};
