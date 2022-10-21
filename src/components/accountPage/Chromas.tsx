import { useMemo, useState } from "react";
import { ChampionAndSkinCard } from "./ChampionAndSkinCard";
import { flatten } from "lodash";
import { Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "@heroicons/react/solid";
export const ChromasTab = ({ account }: { account: any }) => {
    const [sortType, setSortType] = useState<string>("all");
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const skins = useMemo(() => {
        const items = account.championsWithSkins
            .filter((champ: any) => champ.skins.length)
            .map((champ: any) => champ.skins);
        return flatten(items);
    }, [account]);

    const filteredData = useMemo(() => {
        return skins
            .filter(
                (skin: any) =>
                    skin.name
                        .toLowerCase()
                        .indexOf(searchKeyword.toLowerCase()) >= 0 &&
                    skin.chromas.length,
            )
            .map((skin: any) => ({
                ...skin,
                chromas: skin.chromas.filter(
                    (chroma: any) => chroma.ownership.owned,
                ),
            }));
    }, [account, sortType, searchKeyword]);
    return (
        <div>
            <div className="mt-10 flex space-x-5">
                <Input
                    bordered
                    borderWeight={"light"}
                    clearable
                    placeholder="Search for a skin"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    contentLeft={
                        <SearchIcon className="w-5 h-5 text-secondary" />
                    }
                />
            </div>

            <div className="space-y-10 mt-10">
                {filteredData.map((skin: any) =>
                    skin.chromas.length ? (
                        <div>
                            <figure>
                                <h1 className="text-3xl font-semibold italic">
                                    {skin.name}
                                </h1>
                                {/* <span className="mt-1 block opacity-70  tracking-wide capitalize">
                                    {champion.title}
                                </span> */}
                            </figure>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10 mt-10">
                                {skin.chromas.map((skin: any, i: number) => (
                                    <ChampionAndSkinCard
                                        name={`Chroma ${i + 1}`}
                                        chroma={true}
                                        data={skin}
                                        key={`${skin.id}-${i}`}
                                    />
                                ))}
                            </div>{" "}
                        </div>
                    ) : null,
                )}
            </div>
        </div>
    );
};
