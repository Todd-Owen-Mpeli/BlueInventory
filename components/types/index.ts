// Global Pages
export interface IContentContext {
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
	content: any;
	stripePlans: {
		stripePrices:
			| [
					{
						id: string;
						object: string;
						active: boolean;
						billing_scheme: string;
						created: number;
						currency: string;
						custom_unit_amount: any;
						livemode: boolean;
						lookup_key: any;
						metadata: any;
						nickname: any;
						product: {
							id: string;
							object: string;
							active: boolean;
							attributes: [];
							created: number;
							default_price: string;
							description: string;
							images: [any];
							livemode: boolean;
							metadata: any;
							name: string;
							package_dimensions: any;
							shippable: any;
							statement_descriptor: any;
							tax_code: any;
							type: string;
							unit_label: any;
							updated: number;
							url: any;
						};
						recurring: {
							aggregate_usage: any;
							interval: string;
							interval_count: number;
							trial_period_days: any;
							usage_type: string;
						};
						tax_behavior: string;
						tiers_mode: any;
						transform_quantity: any;
						type: string;
						unit_amount: number;
						unit_amount_decimal: string;
					}
			  ];
		stripePremiumPlan: {
			name: string;
			description: string;
			price: number;
			paymentRecurringInterval: string;
		};
		stripeStandardPlan: {
			name: string;
			description: string;
			price: number;
			paymentRecurringInterval: string;
		};
	};
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	navbarMenuLinks: {
		navbarMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	industriesMenuLinks: {
		industriesMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	operationalInsights: [
		{
			node: {
				id: string;
				uri: string;
				title: string;
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			};
		}
	];
	themesOptionsContent: {
		email: string;
		address: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		twitterLink: string;
		facebookLink: string;
		linkedinLink: string;
		copyrightText: string;
	};
	contentSliderPostsContent: {
		content: [
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								backgroundVideoUrl: string;
								backgroundImageOrVideo: string;
								backgroundImage: {
									altText: string;
									sourceUrl: string;
									mediaDetails: {
										height: number;
										width: number;
									};
								};
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								backgroundVideoUrl: string;
								backgroundImageOrVideo: string;
								backgroundImage: {
									altText: string;
									sourceUrl: string;
									mediaDetails: {
										height: number;
										width: number;
									};
								};
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								backgroundVideoUrl: string;
								backgroundImageOrVideo: string;
								backgroundImage: {
									altText: string;
									sourceUrl: string;
									mediaDetails: {
										height: number;
										width: number;
									};
								};
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			}
		];
	};
}

// Firebase
export interface IFirebaseUser {
	uid: string;
	email: string;
	metadata: string;
	phoneNumber: string;
	displayName: string;
	profileImageURL: string;
}

export interface IFirebaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

// Components Card
export interface IBulletListCard {
	bulletPoint: string;
	iconFillColor: string;
	tailwindStyling: string;
}

export interface IContentImageCard {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
}

export interface IFaqCard {
	title: string;
	paragraph: string;
}

export interface IHeroThreeCard {
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IJumboCard {
	title: string;
	subtitle: string;
	paragraph: string;
}

export interface ILogoCard {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IOperationalInsightsCard {
	uri: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}

export interface IPaymentProvidersCard {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IStatsBulletPointCard {
	bulletPointText: string;
	tailwindStyling: string;
}

export interface ITestimonialCard {
	title: string;
	paragraph: string;
	jobPosition: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ITitleThreeContentGridCard {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

// Elements
export interface IErrorPage {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IFooterMenuLinks {
	url: string;
	label: string;
	tailwindStyling: string;
}

export interface INavbarMenuLinks {
	url: string;
	label: string;
	tailwindStyling: string;
}

export interface IParagraphProps {
	content: string;
	tailwindStyling: string;
}

// layout
export interface ILayout {
	children: React.ReactNode;
}

export interface ILayoutTwo {
	pageTitle: any;
	children: React.ReactNode;
}

// Components
export interface IContactForm {
	title: string;
	backgroundImage: string;
}

export interface ILoadingState {
	error: boolean;
	isLoading: boolean;
}

export interface IContactInfo {
	title: string;
	paragraph: string;
}

export interface IContentBackgroundImage {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				contentLocation: string;
				backgroundImage: {
					sourceUrl: string;
				};
			};
		}
	];
}

export interface ICTA {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	content: {
		title: string;
		paragraph: string;
	};
}

export interface ICTATwo {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IFaq {
	title: string;
	paragraph: string;
	qagrid: [
		{
			title: string;
			paragraph: string;
		}
	];
}

export interface IHero {
	title: string;
	subtitle: string;
	backgroundImage: string;
	backgroundVideoUrl: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
}

export interface IHeroTwo {
	title: string;
	paragraph: string;
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

export interface IHeroThreeProps {
	title: string;
	paragraph: string;
	imageGrid: [
		{
			card: {
				link: {
					url: string;
					title: string;
					target: string;
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
}

export interface IImageGrid {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageThree: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFour: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFive: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageSix: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface IJumboContent {
	title: string;
	paragraph: string;
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	cardThree: {
		foreground: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
		background: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
}

export interface IJumboContentTwo {
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
}

export interface ILogos {
	title: string;
	paragraph: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

export interface IMobileNavbar {
	user: {
		uid: string;
		email: string;
		metadata: string;
		phoneNumber: string;
		displayName: string;
		profileImageURL: string;
	};
	signedInUser: boolean;
	revealMobileMenu: boolean;
}

export interface IOperationalInsights {
	title: string;
	italic: string;
	paragraph: string;
}

export interface IPricing {
	title: string;
	italic: string;
	pointOne: string;
	pointTwo: string;
	paragraph: string;
	card: {
		bulletList: [
			{
				id: string;
				bulletPoint: string;
			}
		];
	};
	paymentProviders: [
		{
			id: string;
			logo: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

export interface ISignIn {
	title: string;
	paragraph: string;
}

export interface ISignUp {
	title: string;
	paragraph: string;
}

export interface IStats {
	title: string;
	subtitle: string;
	paragraph: string;
	bulletPoints: [
		{
			id: string;
			bulletPoint: string;
		}
	];
	column: {
		title: string;
		values: string;
		percentage: string;
	};
	columnTwo: {
		title: string;
		values: string;
		percentage: string;
	};
}

export interface ISustainability {
	title: string;
	subtitle: string;
	paragraph: string;
	percentage: string;
	imageText: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

export interface ITestimonial {
	title: string;
	paragraph: string;
	contentGrid: [
		{
			card: {
				id: string;
				name: string;
				position: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
}

export interface ITitleParagraph {
	title: string;
	paragraph: string;
}

export interface ITitleThreeContentGrid {
	title: string;
	contentGrid: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
}