import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
	title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || "Name Page"}</title>

				<meta name="author" content="Jhonny Mosquera - jhonnymosquera16@gmail.com" />
				<meta name="description" content={`${title}`} />
				<meta name="keywords" content={`${title}`} />
			</Head>

			<main className="container">{children}</main>
		</>
	);
};
