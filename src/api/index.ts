import { request } from "@helpers/request";
const getAccounts = async () => {
    const { data } = await request.get("http://localhost:3001/api/accounts");
    return data;
};
const getAccount = async (id: string) => {
    console.log(id);
    const { data } = await request.get(
        `http://localhost:3001/api/accounts/${id}`,
    );
    return data;
};

export { getAccounts, getAccount };
