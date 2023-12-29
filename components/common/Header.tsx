import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const ConnectWalletButton = dynamic(() => import("./ConnectWalletButton"), {
	ssr: false,
});

const Header = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [dropdown, setDrodown] = useState(false);
	return isLoading ? (
		<Loading />
	) : (
		<div className="sm:w-screen w-full h-min flex flex-row justify-between pt-[4px] items-center bg-white">
			<img
				src="/assets/images/logo.svg"
				alt=""
				className="lg:h-[135px] lg:ml-[36px] h-[50px]"
			/>
			<div className="w-min h-[45px] bg-[#f7bdcc] rounded-[12px] flex flex-row justify-between items-center mr-[12px] max-sm:hidden">
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
			{/* <button onClick={} className="ml-[16px] border-[1px] border-solid">
				dropdown
				{dropdown && (
					<div className="flex flex-col">
						<button className="px-[32px] hover:text-white">Products</button>
						<button className="px-[32px] hover:text-white">Protocols</button>
						<button className="px-[32px] hover:text-white">Tokens</button>
						<button className="px-[32px] hover:text-white min-w-[150px]">
							Use Cases
						</button>
					</div>
				)}
			</button> */}
		</div>
	);
};

export default Header;
