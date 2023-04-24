export interface easyBanckResponse {
	eslogan: Eslogan;
	services: ServicesClass;
	latestArticles: LatestArticle[];
}

export interface Eslogan {
	title: string;
	desc: string;
}

export interface LatestArticle {
	img: string;
	autor: string;
	title: string;
	desc: string;
}

export interface ServicesClass {
	title: string;
	desc: string;
	servicesItem: ServicesItem[];
}

export interface ServicesItem {
	icon: string;
	title: string;
	desc: string;
}
