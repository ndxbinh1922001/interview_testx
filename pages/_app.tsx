import { EmptyLayout } from "@/components/layout/EmptyLayout";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/models/common";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<Layout>
			<SessionProvider session={pageProps.session}>
				<ToastContainer />
				<Component {...pageProps} />
			</SessionProvider>
		</Layout>
	);
}
