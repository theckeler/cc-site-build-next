"use client";

import MenuBody from "./components/Body";
import MenuTitle from "./components/Title";

export default function Menu({ className, menu }) {
	const mainNavCSS = menu.component === "mainNav" && "lg:hidden";

	return (
		<div
			id={menu.id}
			className={`popup-item hidden fixed z-50 ${
				menu.left ? "left-0" : "right-0"
			} top-0 w-full md:max-w-xl bg-white ${className}`}>
			<ul
				className={`flex flex-col h-[calc(100vh-114px)]  max-h-screen min-h-[100dvh] ${
					menu.component === "mainNav" &&
					"lg:h-auto lg:max-h-none lg:min-h-[auto]"
				}`}>
				<li className={`border-b bg-zinc-200 ${mainNavCSS}`}>
					<MenuTitle
						{...{
							title: menu.title,
							component: menu.component,
						}}
					/>
				</li>
				<li
					className={`overflow-x-scroll grow ${
						menu.component !== "mainNav" && "pt-2 pb-10"
					} `}>
					<MenuBody
						{...{
							loadComponent: menu.component,
							button: { ...menu.button },
							menuItems: menu.menuItems,
						}}
					/>
				</li>
				{menu.button && (
					<li
						className={`mt-auto h-16 px-2 py-2 w-full bg-zinc-200 ${mainNavCSS}`}>
						<button
							className={`bg-amber-400 p-2 h-12 min-h-full w-full block truncate ... ${menu.button.className}`}>
							{menu.button.title}
						</button>
					</li>
				)}
			</ul>
		</div>
	);
}
