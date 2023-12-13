import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LaunchApp = () => {
	const router = useRouter();
	const { data: session } = useSession();
	return (
		<button
			onClick={() => {
				if (session) {
					router.push("/test2");
				} else {
					toast.error("You should login");
				}
			}}
			className="h-[40px] bg-white rounded-[32px] flex items-center justify-center border-solid border-[2px] border-white hover:border-[#7BB8F1]"
		>
			<div className="text-center text-black text-lg font-bold font-['Helvetica Neue'] px-[60px] hover:text-[#7BB8F1]">
				Launch App
			</div>
		</button>
	);
};

export default LaunchApp;
