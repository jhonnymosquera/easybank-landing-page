import { easyBanckResponse } from "@/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<easyBanckResponse>) {
	res.status(200).json({
		eslogan: {
			title: "Next generation digital banking",
			desc: "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
		},
		services: {
			title: "Why choose Easybank?",
			desc: "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
			servicesItem: [
				{
					icon: "/img/services/icon-online.svg",
					title: "Online Banking",
					desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
				},
				{
					icon: "/img/services/icon-budgeting.svg",
					title: "Simple Budgeting",
					desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
				},
				{
					icon: "/img/services/icon-onboarding.svg",
					title: "Fast Onboarding",
					desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
				},
				{
					icon: "/img/services/icon-api.svg",
					title: "Open API",
					desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
				},
			],
		},
		latestArticles: [
			{
				img: "/img/articles/image-currency.jpg",
				autor: "Claire Robinson",
				title: "Receive money in any currency with no fees",
				desc: "The world is getting smaller and we’re becoming more mobile. So why should you beforced to only receive money in a single …",
			},
			{
				img: "/img/articles/image-restaurant.jpg",
				autor: "Wilson Hutton",
				title: "Treat yourself without worrying about money",
				desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
			},
			{
				img: "/img/articles/image-plane.jpg",
				autor: "Wilson Hutton",
				title: "Take your Easybank card wherever you go",
				desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
			},
			{
				img: "/img/articles/image-confetti.jpg",
				autor: "Claire Robinson",
				title: "Our invite-only Beta accounts are now live!",
				desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
			},
		],
	});
}
