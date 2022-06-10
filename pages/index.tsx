import React from "react";

import { Container, Header } from "@components";
import { Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "@heroicons/react/outline";
import { Divider } from "@components/divider";
import { FlatSelect } from "@components/flatSelect";
import Layout from "@components/layout";
import { Card } from "@components/card";

const regions = ["euw", "eun", "na", "kr", "br"];
const Home: React.FC = () => {
    return (
        <Layout>
            <Container>
                <div className="mt-10">
                    <Header
                        title="Public Accounts"
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
                        {new Array(20).fill({}).map(() => {
                            return <Card />;
                        })}
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Home;
