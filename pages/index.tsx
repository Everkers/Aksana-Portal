import React from "react";

import { Container, Header } from "@components";
import { Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "@heroicons/react/outline";
import { Divider } from "@components/divider";
import { FlatSelect } from "@components/flatSelect";
import Layout from "@components/layout";
import { Card } from "@components/card";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "src/helpers/requireAuthentication";
import { useQuery } from "react-query";
import { getAccounts } from "src/api";

const regions = ["euw", "eun", "na", "kr", "br"];
const Home: React.FC = () => {
    const { data } = useQuery("Accounts", getAccounts);
    const accounts = data?.accounts;
    return (
        <Layout>
            <Container>
                <div className="mt-10">
                    <Header
                        title="My Accounts"
                        subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                quod officia rerum exercitationem?"
                    />
                    <div className="flex space-x-5 mt-5">
                        <Input
                            bordered
                            borderWeight={"light"}
                            placeholder="Search for skins"
                            contentLeft={
                                <SearchIcon className="w-5 h-5 text-secondary" />
                            }
                        />
                        <Input
                            bordered
                            borderWeight={"light"}
                            placeholder="Search for champions"
                            contentLeft={
                                <SearchIcon className="w-5 h-5 text-secondary" />
                            }
                        />
                    </div>
                    <Divider />
                    <div className="flex flex-wrap  gap-4">
                        <div>
                            <FlatSelect
                                options={regions}
                                title={"Select server"}
                            />
                        </div>
                        {/* <div>
                            <FlatSelect
                                options={["+20", "+50", "+100"]}
                                title={"NO. OF SKINS"}
                            />
                        </div> */}
                        <div>
                            <FlatSelect
                                options={["+20", "+50", "+100"]}
                                title={"NO. OF CHAMPIONS"}
                            />{" "}
                        </div>
                        <div>
                            <FlatSelect
                                options={["+20", "+50", "+100"]}
                                title={"SORT BY"}
                            >
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
                                        RANK
                                    </Dropdown.Button>
                                    <Dropdown.Menu aria-label="Actions">
                                        <Dropdown.Item key="rank">
                                            RANK
                                        </Dropdown.Item>
                                        <Dropdown.Item key="skins">
                                            Number of skins
                                        </Dropdown.Item>
                                        <Dropdown.Item key="champions">
                                            Number of champions
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </FlatSelect>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        {accounts?.map((account: any) => (
                            <Card account={account} />
                        ))}
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
    /* eslint-disable @typescript-eslint/no-unused-vars */
    async (ctx) => {
        return {
            props: {},
        };
    },
);
export default Home;
