import Link from "next/link";
import { menuItems } from "./menuItems";
import { FC } from "react";

export const MenuItemsLits: FC = () => {
	return (
		<ul className="menu_ul">
			{menuItems.map(({ text, path }, i) => (
				<li className="menu_ul_li" key={i}>
					<Link href={path}> {text} </Link>
				</li>
			))}
		</ul>
	);
};
