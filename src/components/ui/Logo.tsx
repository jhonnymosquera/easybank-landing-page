import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
	return (
		<div className="logo">
			<Image src={"/logo.svg"} width={200} height={50} alt="Logo" />
		</div>
	);
};
