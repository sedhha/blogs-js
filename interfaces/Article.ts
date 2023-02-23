export interface IArticle {
	id: number;
	date: string;
	slug: string;
	type: string;
	link: string;
	title: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
		protected: boolean;
	};
	author: number;
	featured_media: number;
	jetpack_featured_media_url: string;
	parsely: {
		version: string;
		meta: any[];
		rendered: string;
	};
	shortlink: string;
	parselyMeta: {
		[key: string]: any;
	};
	rapidData: {
		pt: string;
		pct: string;
	};
	premiumContent: boolean;
	premiumCutoffPercent: number;
	featured: boolean;
	subtitle: string;
	editorialContentProvider: string;
	tc_cb_mapping: any[];
	associatedEvent: null;
	event: null;
	authors: number[];
	hide_featured_image: boolean;
	canonical_url: string;
	primary_category: {
		term_id: number;
		name: string;
		slug: string;
		term_group: number;
		term_taxonomy_id: number;
		taxonomy: string;
		description: string;
		parent: number;
		count: number;
		filter: string;
	};
	_links: {
		self: {
			href: string;
		}[];
		collection: {
			href: string;
		}[];
		about: {
			href: string;
		}[];
		replies: {
			embeddable: boolean;
			href: string;
		}[];
		'version-history': {
			count: number;
			href: string;
		}[];
		'predecessor-version': {
			id: number;
			href: string;
		}[];
		'wp:featuredmedia': {
			embeddable: boolean;
			href: string;
		}[];
		'wp:attachment': {
			href: string;
		}[];
		'wp:term': {
			taxonomy: string;
			embeddable: boolean;
			href: string;
		}[];
		curies: {
			name: string;
			href: string;
			templated: boolean;
		}[];
	};
}

export interface IDetailedArticle {
	title: { rendered: string };
	status: string;
	author: number;
	tags: string[];
	categories: string[];
	content: { rendered: string };
}
