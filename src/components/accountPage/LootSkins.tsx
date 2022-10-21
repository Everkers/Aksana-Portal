import { Alert } from "@components/alert";

import { useMemo } from "react";
import { ChampionAndSkinCard } from "./ChampionAndSkinCard";

export const Lootskins = ({ account }: { account: any }) => {
    const skins = useMemo(() => {
        return account?.loot.filter(
            (item: any) => item.displayCategories === "SKIN",
        );
    }, [account]);
    return (
        <div>
            {/* <div className="mt-10 flex space-x-5">
                <Input
                    bordered
                    borderWeight={"light"}
                    clearable
                    placeholder="Search for a champion"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    contentLeft={
                        <SearchIcon className="w-5 h-5 text-secondary" />
                    }
                />
            </div> */}
            <Alert message="Currently we only display the skin loot because it's the most important, let us know if you wanna see more!" />
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10 mt-10">
                {skins?.map((skin: any) => {
                    const championId = skin.splashPath.split("/").slice(-2)[0];
                    return (
                        <ChampionAndSkinCard
                            data={{
                                championId,
                                name: skin.itemDesc,
                                splashPath: skin.splashPath,
                            }}
                            skin
                            key={championId}
                        />
                    );
                })}
            </div>
        </div>
    );
};
