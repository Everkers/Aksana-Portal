import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export function requireAuthentication(gssp: GetServerSideProps) {
    //eslint-disable-next-line
    return async (context: GetServerSidePropsContext) => {
        try {
            const session = await getSession(context);
            if (!session) {
                return {
                    redirect: {
                        permanent: false,
                        destination: "/login",
                    },
                };
            } else return await gssp(context);
        } catch (err) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/",
                },
            };
        }
    };
}
