import React, { useState } from "react";
import Header from "@/components/common/Header";
import { LayoutProps } from "@/models/common";

export function MainLayout({ children }: LayoutProps) {
	return (
		<div className="w-screen h-screen relative bg-gived bg-no-repeat bg-scroll bg-cover">
			<Header />
			<div className="">{children}</div>
		</div>
	);
}
