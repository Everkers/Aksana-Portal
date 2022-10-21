import { ChampionsTab } from "@components/accountPage/ChampionsTab";
import { ChromasTab } from "@components/accountPage/Chromas";
import { Lootskins } from "@components/accountPage/LootSkins";
import {
    AccountNavigation,
    AccountNavigationTab,
} from "@components/accountPage/Navigation";
import { SkinsTab } from "@components/accountPage/SkinsTab";
import { DataHandler } from "@components/dataHandler/DataHandler";
import { BlueEssenceIcon, RpIcon, UnrankedIcon } from "@components/icons";
import Layout from "@components/layout";
import {
    CheckCircleIcon,
    ClipboardCopyIcon,
    TrashIcon,
} from "@heroicons/react/solid";
import {
    Avatar,
    Container,
    Badge,
    Tooltip,
    Divider,
    Checkbox,
    Button,
    Popover,
} from "@nextui-org/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { changePrivacy, deleteAccount, getAccount } from "src/api";

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
const AccountPage = ({ mode }: { mode: "view" | "normal" }) => {
    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [accountPrivacy, setAccountPrivacy] = useState<boolean>();

    const router = useRouter();
    const { mutateAsync } = useMutation(() =>
        deleteAccount(router.query.id as string),
    );
    const { mutate } = useMutation(
        (val: boolean) => changePrivacy(router.query.id as string, val),
        {
            onMutate: (val) => {
                setAccountPrivacy(val);
            },
        },
    );

    const { data, ...queryResult } = useQuery(
        ["Account", router.query.id],
        () => getAccount(router.query.id as string),
        {
            enabled: !!router.query.id,
            onSuccess: (data) => {
                setAccountPrivacy(data.accounts.status === "PUBLIC");
            },
        },
    );
    const account = useMemo(() => data && data.accounts, [data]);
    const activeTab = useMemo(() => navigationTabs[currentTab], [currentTab]);
    const profileIcon = useMemo(
        () =>
            account &&
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${account?.profile?.profileIconId}.jpg`,
        [account],
    );

    const handleDelete = () => {
        try {
            toast.promise(mutateAsync(), {
                loading: "Deleting Account...",
                success: () => {
                    router.push("/");
                    return <b>Account has been deleted!</b>;
                },
                error: <b>Something went wrong!</b>,
            });
        } catch (err) {
            console.error(err);
        }
    };
    const handleCopyLink = () => {
        const publicLink = `${window.location.origin}${router.asPath}?mode=view`;
        navigator.clipboard.writeText(publicLink);
        toast.success("Copied!");
    };
    console.log(account);

    return (
        <Layout navbar={mode !== "view"}>
            <DataHandler queryResult={{ ...queryResult, data }} data={data}>
                <div className="mt-4 w-full absolute inset-0">
                    <div
                        style={{
                            backgroundImage: `url(${
                                account?.background
                                    ? account?.background
                                    : "https://images4.alphacoders.com/114/1149587.jpg"
                            })`,
                        }}
                        className="w-full md:block flex items-center linear-background md:h-[280px] min-h-[380px]"
                    >
                        <Container className="flex relative  h-full">
                            <div className="flex !mr-auto mb-4 md:mb-0 md:-mt-10 items-center space-x-5">
                                <Badge
                                    content={account?.profile?.summonerLevel}
                                    color={"primary"}
                                    size={"md"}
                                    style={{
                                        right: 10,
                                        top: 10,
                                        borderColor: "white",
                                        borderWidth: 1,
                                    }}
                                >
                                    <Avatar
                                        className="w-20 h-20"
                                        src={profileIcon}
                                    />
                                </Badge>
                                <div>
                                    <h1 className="font-semibold items-center flex text-2xl">
                                        <span className="mr-2">
                                            {account?.profile?.displayName}
                                        </span>
                                        {account?.emailVerification
                                            .emailVerified && (
                                            //eslint-disable-next-line
                                            //@ts-ignore
                                            <Tooltip content={"Email Verified"}>
                                                <CheckCircleIcon className="w-5 mt-1 text-white h-5" />
                                            </Tooltip>
                                        )}
                                    </h1>
                                    <p className="-mt-1 opacity-80">
                                        {`${account?.rankedStats.highestRankedEntrySR.tier} ${account?.rankedStats.highestRankedEntrySR.division}`}
                                    </p>
                                </div>
                            </div>
                            <div className="w-[400px] !ml-auto p-5 my-auto min-h-[140px]  rounded-lg bg-cardColor shadow-md">
                                <div className=" grid grid-cols-2 gap-5">
                                    <div className="flex items-center space-x-1">
                                        <UnrankedIcon className="w-10" />
                                        <div>
                                            <span className="text-xs opacity-80">
                                                Honor Level
                                            </span>
                                            <h1 className="font-bold">
                                                Level{" "}
                                                {account?.honorLevel.honorLevel}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <UnrankedIcon className="w-10" />
                                        <div>
                                            <span className="text-xs opacity-80">
                                                MMR
                                            </span>
                                            <h1 className="font-bold">
                                                {account?.mmr?.value !== "N/A"
                                                    ? `${account?.mmr?.elo}/${account?.mmr?.value} `
                                                    : "N/A"}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <RpIcon className="w-6" />
                                        <div>
                                            <span className="text-xs opacity-80">
                                                RP
                                            </span>
                                            <h1 className="font-bold clas">
                                                {" "}
                                                {account?.RP.RP}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <BlueEssenceIcon className="w-7" />
                                        <div>
                                            <span className="text-xs opacity-80">
                                                Blue Essence
                                            </span>
                                            <h1 className="font-bold clas">
                                                {
                                                    account?.allCurrencies
                                                        .lol_blue_essence
                                                }
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                {account?.owner && (
                                    <>
                                        {/* eslint-disable-next-line*/}
                                        {/* @ts-ignore */}
                                        <Divider className="my-3" />
                                        <div className="flex">
                                            <Checkbox
                                                onChange={(val) => mutate(val)}
                                                isSelected={accountPrivacy}
                                                size="sm"
                                                defaultSelected={true}
                                            >
                                                Public
                                            </Checkbox>
                                            <div className="ml-auto flex space-x-3">
                                                <Popover
                                                    isOpen={confirmOpen}
                                                    onOpenChange={
                                                        setConfirmOpen
                                                    }
                                                >
                                                    <Popover.Trigger>
                                                        <button className="rounded-lg flex items-center space-x-2 outline-none border border-gray-600 p-2 hover:bg-gray-900 transition-all">
                                                            <TrashIcon className="w-6" />
                                                            <span className="opacity-80 text-sm">
                                                                Delete Account
                                                            </span>
                                                        </button>
                                                    </Popover.Trigger>
                                                    <Popover.Content>
                                                        <div className="p-3 space-y-3">
                                                            <p>
                                                                Are you sure you
                                                                want to delete
                                                                this account?
                                                            </p>
                                                            <Button
                                                                onClick={() => {
                                                                    setConfirmOpen(
                                                                        false,
                                                                    );
                                                                    handleDelete();
                                                                }}
                                                                size={"sm"}
                                                            >
                                                                Yes
                                                            </Button>
                                                        </div>
                                                    </Popover.Content>
                                                </Popover>

                                                <button
                                                    onClick={handleCopyLink}
                                                    className="rounded-lg outline-none border border-gray-600 p-2 hover:bg-gray-900 transition-all"
                                                >
                                                    <ClipboardCopyIcon className="w-6" />
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
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
            </DataHandler>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            mode: query?.mode || "normal",
        },
    };
};
export default AccountPage;
