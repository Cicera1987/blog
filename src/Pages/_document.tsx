import Document, { Html, Head, Main, NextScript } from "../../node_modules/next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="my value" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,900;1,700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/cica_icon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}