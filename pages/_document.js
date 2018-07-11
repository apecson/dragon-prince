import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/bootstrap.min.css" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
