import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import React from "react";
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>{CssBaseline.flush()}</Head>
                <link rel="shortcut icon" href="favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="apple-icon-180x180.png"
                />
                <link rel="icon" href="favicon.ico" />
                <title>Aksana • League Of Legends</title>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
