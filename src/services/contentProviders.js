import { theme } from "../styles/variables";
import { Launches, NewLaunches, Rockets } from "../presentation/pages";

export const AVAILABLE_ROUTES = [
	{
		title: "Lançamentos",
		prefixUrlMatch: "lancamentos",
		background: theme.launchesColor,
		routes: [
			{
				title: "SpaceX Utils - Lançamentos",
				path: "/launches",
				component: Launches,
				anchors: [],
			},
		],
	},
	{
		title: "Foguetes",
		prefixUrlMatch: "foguetes",
		background: theme.rocketsColor,
		routes: [
			{
				title: "SpaceX Utils - Foguetes",
				path: "/rockets",
				component: Rockets,
				anchors: [],
			},
		],
	},
	{
		title: "Novos Lançamentos",
		prefixUrlMatch: "new-launches",
		background: theme.googleColor,
		routes: [
			{
				title: "SpaceX Utils - Novos lançamentos",
				path: "/new-launches",
				component: NewLaunches,
				anchors: [],
			},
		],
	},
];
