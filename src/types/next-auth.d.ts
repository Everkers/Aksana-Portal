import NextAuth from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            token: string;
            user: {
                role: string;
                picture: string;
                id: string;
                name: string;
                email: string;
                createdAt: string;
                updatedAt: string;
            };
        };
        token: string;
    }
}
