import axios from "axios";
import { getSession } from "next-auth/react";

const request = axios.create();
request.interceptors.request.use(async (config) => {
    const session = await getSession();
    const token = session?.user.token;
    config.headers!.Authorization = `Bearer ${token}`;
    return config;
});

export { request };
