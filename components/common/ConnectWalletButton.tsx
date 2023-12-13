import { shortenAddress } from "@/utils/shortenAddress";
import React, { useState } from "react";

const ConnectWalletButton = () => {
	const [account, setAccount] = useState<null | {
		address: string;
		publicKey: string;
	}>(null);
	const getAptosWallet = () => {
		if ("aptos" in window) {
			return window.aptos;
		} else {
			window.open("https://petra.app/", `_blank`);
		}
	};
	const connectWallet = async () => {
		try {
			if (typeof window !== "undefined") {
				const wallet: any = getAptosWallet();
				console.log("wallet", wallet);
				const response = await wallet.connect();
				console.log(response); // { address: string, address: string }

				const account = await wallet.account();
				console.log(account); // { address: string, address: string }
				setAccount(account);
			}
		} catch (error) {
			console.log("error", error);
			// { code: 4001, message: "User rejected the request."}
		}
	};
	const disconnectWallet = async () => {
		try {
			if (typeof window !== "undefined") {
				const wallet: any = getAptosWallet();
				console.log("wallet", wallet);
				const response = await wallet.disconnect();
				setAccount(null);
			}
		} catch (error) {
			console.log("error", error);
		}
	};
	return (
		<button
			onClick={!account ? connectWallet : disconnectWallet}
			className="text-center text-blue-950 text-base font-bold font-['Helvetica Neue']"
		>
			{!account ? (
				"Connect Wallet"
			) : (
				<div className="flex flex-row">
					<img src="/assets/images/logo_petra.svg" alt="" />
					<div className="ml-[10px]">{shortenAddress(account.address)}</div>
				</div>
			)}
		</button>
	);
};

export default ConnectWalletButton;
