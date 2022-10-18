import { ChampionAndSkinCard } from "@components/accountPage/ChampionAndSkinCard";
import { ChampionsTab } from "@components/accountPage/ChampionsTab";
import { ChromasTab } from "@components/accountPage/Chromas";
import { Lootskins } from "@components/accountPage/LootSkins";
import {
    AccountNavigation,
    AccountNavigationTab,
} from "@components/accountPage/Navigation";
import { SkinsTab } from "@components/accountPage/SkinsTab";
import Layout from "@components/layout";
import { Avatar, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getAccount } from "src/api";

const navigationTabs: AccountNavigationTab[] = [
    {
        name: "Champions",
        component: ChampionsTab,
    },
    {
        name: "Skins",
        component: SkinsTab,
    },
    {
        name: "Skins In Loot",
        component: Lootskins,
    },
    {
        name: "Chromas",
        component: ChromasTab,
    },
];
const AccountPage = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);
    const router = useRouter();
    const { data } = useQuery(
        ["Account", router.query.id],
        () => getAccount(router.query.id as string),
        {
            enabled: !!router.query.id,
        },
    );
    const account = useMemo(() => data && data.accounts[0], [data]);
    const activeTab = useMemo(() => navigationTabs[currentTab], [currentTab]);
    return (
        <Layout>
            <div className="mt-4 w-full absolute inset-0">
                <div className="w-full linear-background h-[220px]">
                    <Container className="flex relative  items-center h-full">
                        <div className="flex mx-12 -mt-10 items-center space-x-5">
                            <Avatar
                                className="w-20 h-20"
                                src="https://pbs.twimg.com/media/Exv9op2W8AQWoSf.jpg"
                            />
                            <div>
                                <h1 className="font-semibold text-2xl">
                                    Automated
                                </h1>
                                <p className="-mt-1 opacity-80">Silver II</p>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container className="my-10">
                    <AccountNavigation
                        className="my-4"
                        onChange={(val) => setCurrentTab(val)}
                        current={currentTab}
                        tabs={navigationTabs}
                    />
                    {activeTab.component && (
                        <activeTab.component account={account} />
                    )}
                </Container>
            </div>
        </Layout>
    );
};
export default AccountPage;
