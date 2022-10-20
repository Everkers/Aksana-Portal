import { request } from "@helpers/request";
const getAccounts = async () => {
    const { data } = await request.get("/accounts");
    return data;
};
const getAccount = async (id: string) => {
    const { data } = await request.get(`/accounts/${id}`);
    return data;
};

const deleteAccount = async (id: string) =>
    await request.delete(`/accounts/delete/${id}`);

const changePrivacy = async (id: string, isPublic: boolean) =>
    await request.post(`/accounts/privacy/${id}`, {
        privacy: isPublic ? "PUBLIC" : "PRIVATE",
    });

export { getAccounts, getAccount, deleteAccount, changePrivacy };
