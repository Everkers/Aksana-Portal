import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextUIProvider } from "@nextui-org/react";
import { theme } from "stitches.config";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Navbar } from "@components/navbar";
import { SessionProvider } from "next-auth/react";
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from "@heroicons/react/solid";

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <SessionProvider session={session}>
            <ScrollToTop
                smooth
                className="flex justify-center items-center"
                component={<ChevronUpIcon className="text-gray-600" />}
            />
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Provider store={store}>
                        <NextUIProvider theme={theme}>
                            <Component {...pageProps} />
                        </NextUIProvider>
                    </Provider>
                </Hydrate>
            </QueryClientProvider>
        </SessionProvider>
    );
}

export default MyApp;
