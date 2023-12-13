import React, { useEffect, useState } from "react";
import Header from "@/components/common/Header";
import { LayoutProps } from "@/models/common";
import { useRouter } from "next/router";
import Loading from "../common/Loading";

export function MainLayout({ children }: LayoutProps) {
	const router = useRouter();
	const [isLoading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		const checkIP = async () => {
			try {
				setLoading(true);
				// const response = await fetch("http://ip-api.com/json");
				// const data = await response.json();
				// console.log("data", data);
				// if (data.countryCode === "JP") {
				// 	router.push("/deny-access");
				// }
				setLoading(false);
			} catch (error) {
				console.log("error", error);
			}
		};
		checkIP();
	}, []);
	return isLoading ? (
		<Loading class="w-screen h-screen flex justify-center items-center" />
	) : (
		<div className="w-screen h-screen relative bg-gived bg-no-repeat bg-scroll bg-cover">
			<Header />
			<div className="">{children}</div>
		</div>
	);
}
