import { signIn, useSession, signOut } from "next-auth/react";
import React from "react";

const Login = () => {
	const { data: session } = useSession();
	return (
		<button
			onClick={() => {
				try {
					if (session) {
						signOut();
					} else {
						signIn("google");
					}
				} catch (error) {
					console.log("error", error);
				}
			}}
			className="h-[40px] bg-[#7BB8F1] rounded-[32px] flex items-center justify-center border-solid border-[2px] hover:border-black border-[#7BB8F1]"
		>
			<div className="text-center text-white text-lg font-bold font-['Helvetica Neue'] px-[60px] hover:text-black">
				{!session ? "Login" : "Logout"}
			</div>
		</button>
	);
};

export default Login;
