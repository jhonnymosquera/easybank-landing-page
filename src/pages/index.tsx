import { GetStaticProps } from "next";
import { easybackApi } from "@/api";
import { easyBanckResponse } from "@/interfaces";
import { Layout } from "@/components/layout";
import { Menu } from "@/components/menu";

interface Props {
	props: easyBanckResponse;
}

export default function Home({ props }: Props) {
	const { eslogan, latestArticles, services } = props;

	return (
		<Layout>
			<Menu />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await easybackApi.get<easyBanckResponse>("/easybanck");

	return {
		props: {
			props: data,
		},
	};
};
