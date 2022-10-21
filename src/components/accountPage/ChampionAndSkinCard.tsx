import clsx from "clsx";
import { useMemo } from "react";

export const ChampionAndSkinCard = ({
    data,
    skin = false,
    chroma = false,
    name,
}: {
    data: any;
    skin?: boolean;
    chroma?: boolean;
    name?: string;
}) => {
    const baseSkinImage = useMemo(() => {
        if (!chroma) {
            const id = data[!skin ? "baseSplashPath" : "splashPath"]
                .split("/")
                .slice(-2)[1];
            return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${
                skin ? data.championId : data.id
            }/${id}`;
        } else {
            return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-chroma-images/${data.championId}/${data.id}.png`;
        }
    }, [data, skin, chroma]);
    return (
        <div
            className={clsx(
                "md:w-[250px] w-[170px] h-[290px] border border-gray-700 md:h-[350px] relative rounded-md transition-all cursor-pointer duration-300 overflow-hidden card-clip-path ",
                chroma && "chroma-background",
            )}
        >
            <img alt={data.name || name} src={baseSkinImage} />
            <span className="bg-cardColor text-sm">{data.name || name}</span>
        </div>
    );
};
