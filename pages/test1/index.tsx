import { MainLayout } from "@/components/layout/MainLayout";
import LaunchApp from "@/components/test1/LaunchApp";
import Login from "@/components/test1/Login";
import SignUp from "@/components/test1/SignUp";
import React from "react";

const Test1 = () => {
	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div className="flex flex-row mt-[10vh] ml-[36px] justify-between">
				<div className="flex flex-col">
					<div className="text-white text-[69px] font-normal font-['Helvetica Neue'] leading-[80px] tracking-wider">
						Explore and Earn
					</div>
					<div className="flex flex-row justify-start items-center">
						<div className="text-white text-[69px] font-normal font-['Helvetica Neue'] leading-[80px] tracking-wider">
							on
						</div>
						<img
							src="/assets/images/logo_no_bg.png"
							alt=""
							className="h-[80px] mb-[-15px]"
						/>
					</div>
					<SignUp />
					<div className="flex flex-row justify-between mt-[22px]">
						<Login />
						<LaunchApp />
					</div>
				</div>
				<div className="flex justify-start items-start">
					<div className="w-[225px] h-[121px] flex justify-center items-center bg-white mr-[80px] rounded-[20px]">
						<div className="relative flex justify-center">
							<img src="/assets/images/logo.svg" alt="" className="h-[54px]" />
							<div className="text-center text-slate-400 text-xs font-normal font-['Helvetica Neue'] absolute top-[50px] w-[200px]">
								test Front end interview 1
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white bg-opacity-50 rounded-2xl border border-white min-h-[17vh] mx-[16px] mt-[10vh] flex flex-row justify-around items-center">
				<div className="flex flex-col justify-center items-center">
					<div className="text-center text-[#17344F] text-[49px] font-normal font-['Helvetica Neue']">
						$1.80B
					</div>
					<div className="text-center text-[#596F78] text-[16px] font-normal font-['Helvetica Neue']">
						30 Day Volume
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div className="text-center text-[#17344F] text-[49px] font-normal font-['Helvetica Neue']">
						$0.84B
					</div>
					<div className="text-center text-[#596F78] text-[16px] font-normal font-['Helvetica Neue']">
						Managed on testX.fi
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div className="text-center text-[#17344F] text-[49px] font-normal font-['Helvetica Neue']">
						$21.43M
					</div>
					<div className="text-center text-[#596F78] text-[16px] font-normal font-['Helvetica Neue']">
						Total Collateral Automated
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test1;
Test1.Layout = MainLayout;
