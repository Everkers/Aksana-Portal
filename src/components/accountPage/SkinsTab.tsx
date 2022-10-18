import { useMemo, useState } from "react";
import { ChampionAndSkinCard } from "./ChampionAndSkinCard";
import { flatten } from "lodash";
import { Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "@heroicons/react/solid";
export const SkinsTab = ({ account }: { account: any }) => {
    const [sortType, setSortType] = useState<string>("all");
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const skins = useMemo(() => {
        const items = account.championsWithSkins
            .filter((champ: any) => champ.skins.length)
            .map((champ: any) => champ.skins);
        return flatten(items);
    }, [account]);

    const filteredData = useMemo(() => {
        if (sortType === "all") {
            return skins.filter(
                (skin: any) =>
                    skin.name
                        .toLowerCase()
                        .indexOf(searchKeyword.toLowerCase()) >= 0,
            );
        } else {
            return account.championsWithSkins.map((champion: any) => {
                return {
                    ...champion,
                    skins: champion.skins.filter(
                        (skin: any) =>
                            skin.name
                                .toLowerCase()
                                .indexOf(searchKeyword.toLowerCase()) >= 0,
                    ),
                };
            });
        }
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
                <Dropdown>
                    <Dropdown.Button
                        style={{
                            height: 46,
                            minWidth: 55,
                            border: "solid 1px white",
                            textTransform: "uppercase",
                        }}
                        light
                    >
                        {sortType === "all" ? "All Skins" : "Champions"}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        selectionMode="single"
                        onAction={(val) => setSortType(val as string)}
                        aria-label="Actions"
                    >
                        <Dropdown.Item key="all">All</Dropdown.Item>
                        <Dropdown.Item key="champions">Champions</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {sortType === "all" && (
                <div className="grid grid-cols-4 gap-5 gap-y-10 mt-10">
                    {filteredData?.map((skin: any) => (
                        <ChampionAndSkinCard
                            skin={true}
                            data={skin}
                            key={skin.id}
                        />
                    ))}
                </div>
            )}
            {sortType === "champions" && (
                <div className="space-y-10 mt-10">
                    {filteredData.map((champion: any) =>
                        champion.skins.length ? (
                            <div>
                                <figure>
                                    <h1 className="text-3xl font-semibold italic">
                                        {champion.name}
                                    </h1>
                                    <span className="mt-1 block opacity-70  tracking-wide capitalize">
                                        {champion.title}
                                    </span>
                                </figure>
                                <div className="grid grid-cols-4 gap-5 gap-y-10 mt-10">
                                    {champion.skins.map(
                                        (skin: any, i: number) => (
                                            <ChampionAndSkinCard
                                                skin={true}
                                                data={skin}
                                                key={`${skin.id}-${i}`}
                                            />
                                        ),
                                    )}
                                </div>{" "}
                            </div>
                        ) : null,
                    )}
                </div>
            )}
        </div>
    );
};
