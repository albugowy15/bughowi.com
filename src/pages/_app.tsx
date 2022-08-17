import "styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<NextNProgress />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
