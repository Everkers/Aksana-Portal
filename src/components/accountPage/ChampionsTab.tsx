import { DataHandler } from "@components/dataHandler/DataHandler";
import { SearchIcon } from "@heroicons/react/solid";
import { Input } from "@nextui-org/react";
import { useMemo } from "react";
import { useState } from "react";
import { ChampionAndSkinCard } from "./ChampionAndSkinCard";

export const ChampionsTab = ({ account }: { account: any }) => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const champions = useMemo(() => {
        return account?.championsWithSkins.filter(
            (champion: any) =>
                champion.name
                    .toLowerCase()
                    .indexOf(searchKeyword.toLowerCase()) >= 0,
        );
    }, [account, searchKeyword]);
    return (
        <div>
            <div className="mt-10 flex space-x-5">
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
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10 mt-10">
                {champions?.map((champion: any) => (
                    <ChampionAndSkinCard data={champion} key={champion.id} />
                ))}
            </div>
        </div>
    );
};
