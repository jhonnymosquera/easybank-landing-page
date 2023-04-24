import { FC } from "react";
import { MenuItemsLits } from "./MenuItemsLits";
import { ButtonRequest } from "../ui/ButtonRequest";
import { Logo } from "../ui/Logo";

export const Menu: FC = () => {
	return (
		<nav className="menu">
			<Logo />

			<MenuItemsLits />

			<ButtonRequest />
		</nav>
	);
};
