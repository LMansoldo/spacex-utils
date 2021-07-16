import { theme } from "../styles/variables";
import { Launches, NewLaunches, Rockets } from "../presentation/pages";

export const AVAILABLE_ROUTES = [
	{
		title: "Lançamentos",
		prefixUrlMatch: "lancamentos",
		background: theme.launchesColor,
		path: "/launches",
		component: Launches,
		anchors: [],
	},
	{
		title: "Foguetes",
		prefixUrlMatch: "foguetes",
		background: theme.rocketsColor,
		path: "/rockets",
		component: Rockets,
		anchors: [],
	},
	{
		title: "Novos Lançamentos",
		prefixUrlMatch: "new-launches",
		background: theme.googleColor,
		path: "/new-launches",
		component: NewLaunches,
		anchors: [],
	},
];
