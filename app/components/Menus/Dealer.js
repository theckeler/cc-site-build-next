"use client";
import Close from "@/icons/Close";
import ShopYourDealer from "@/dealer/ShopYourDealer";
import toggleMenu from "@/functions/toggleMenu";

export default function Dealer({ className }) {
	return (
		<div
			id="dealer"
			className={`hidden fixed z-50 left-0 top-0 h-screen w-full md:max-w-xl bg-white p-2 lg:p-4 ${className}`}>
			<ul className="flex">
				<li>Dealer</li>
				<li className="ml-auto">
					<button
						onClick={() => {
							toggleMenu(null);
						}}
						className="w-full">
						<Close className="h-12 " />
					</button>
				</li>
				<li>
					<ShopYourDealer />
				</li>
			</ul>
		</div>
	);
}
