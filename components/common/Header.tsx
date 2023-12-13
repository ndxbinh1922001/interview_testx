import React from "react";
// import ConnectWalletButton from "./ConnectWalletButton";
import dynamic from "next/dynamic";
const ConnectWalletButton = dynamic(() => import("./ConnectWalletButton"), {
	ssr: false,
});

const Header = () => {
	return (
		<div className="w-full h-min flex flex-row justify-between pt-[4px] items-center bg-white">
			<img
				src="/assets/images/logo.svg"
				alt=""
				className="h-[135px] ml-[36px]"
			/>
			<div className="w-min h-[45px] bg-[#f7bdcc] rounded-[12px] flex flex-row justify-between items-center mr-[12px]">
				<div className="flex flex-row text-[14px] font-semibold text-[#596F78]">
					<button className="px-[32px] hover:text-white">Products</button>
					<button className="px-[32px] hover:text-white">Protocols</button>
					<button className="px-[32px] hover:text-white">Tokens</button>
					<button className="px-[32px] hover:text-white min-w-[150px]">
						Use Cases
					</button>
				</div>
				<button className="ml-[32px] w-[203px] h-[30px] bg-white rounded-[32px] shadow mr-[12px] flex justify-center items-center hover:drop-shadow-2xl hover:border-[2px] hover:border-blue-500">
					<ConnectWalletButton />
					<img
						src="/assets/images/icon_button_connect_wallet.svg"
						alt=""
						className="ml-[5px]"
					/>
				</button>
			</div>
		</div>
	);
};

export default Header;
