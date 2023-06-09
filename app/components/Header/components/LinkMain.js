"use client";

import Link from "next/link";
import ChevronRight from "@/icons/ChevronRight";
import ExpandMore from "@/icons/ExpandMore";

export default function LinkMain({ menu, openSubMenu }) {
	const LinkType = menu.slug ? "button" : Link;

	return (
		<LinkType
			href={menu.url}
			className="py-3 px-2 w-full font-bold text-black lg:text-sm flex"
			onClick={openSubMenu}>
			<span>{menu.title}</span>
			{menu.sub && (
				<span className="ml-auto sm:ml-1">
					<ChevronRight className="lg:hidden w-6 fill-black" />
					<ExpandMore className="hidden lg:block w-6 fill-black" />
				</span>
			)}
		</LinkType>
	);
}
