import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { NextUIProvider } from "@nextui-org/react";
import { theme } from "stitches.config";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import { SessionProvider } from "next-auth/react";
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Toaster } from "react-hot-toast";

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <SessionProvider session={session}>
            <Toaster />
            <ScrollToTop
                smooth
                className="flex justify-center items-center"
                component={<ChevronUpIcon className="text-gray-600" />}
            />
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Provider store={store}>
                        {/* eslint-disable-next-line*/}
                        {/* @ts-ignore */}
                        <NextUIProvider theme={theme}>
                            {/* eslint-disable-next-line*/}
                            {/* @ts-ignore */}
                            <Component {...pageProps} />
                        </NextUIProvider>
                    </Provider>
                </Hydrate>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </SessionProvider>
    );
}

export default MyApp;
