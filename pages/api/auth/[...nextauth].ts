import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
    callbacks: {
        jwt: async ({ account, token }) => {
            if (account) {
                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/discord?token=${account?.access_token}`,
                );
                token = data;
            }
            return token;
        },

        async session(params) {
            const date = new Date();
            date.setDate(date.getDate() + 30);
            return {
                user: params.token,
                expires: date.toISOString(),
            };
        },
    },
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        }),
    ],
};

export default NextAuth(authOptions);
