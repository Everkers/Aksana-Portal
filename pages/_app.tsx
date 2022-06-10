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

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Provider store={store}>
                    <NextUIProvider theme={theme}>
                        {/* <Navbar /> */}
                        <Component {...pageProps} />
                    </NextUIProvider>
                </Provider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
