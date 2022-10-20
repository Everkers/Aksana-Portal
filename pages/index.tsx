import React from "react";

import { Header } from "@components";

import { Divider } from "@components/divider";
import Layout from "@components/layout";
import { Card } from "@components/card";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "src/helpers/requireAuthentication";
import { useQuery } from "react-query";
import { getAccounts } from "src/api";
import { DataHandler } from "@components/dataHandler/DataHandler";
import { Container } from "@nextui-org/react";

const Home: React.FC = () => {
    const { data, ...queryResult } = useQuery("Accounts", getAccounts);
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
                    {/* <div className="flex space-x-5 mt-5">
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
                    </div> */}
                    <Divider />
                    <DataHandler
                        queryResult={{ ...queryResult, data }}
                        data={data}
                    >
                        <div className="grid grid-cols-3 gap-10 mt-10">
                            {accounts?.map((account: any) => (
                                <Card account={account} />
                            ))}
                        </div>
                    </DataHandler>
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
