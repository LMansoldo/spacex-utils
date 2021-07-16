import React from "react";
import { useTranslation } from "react-i18next";
import { theme } from "../styles/variables";
import { Launches, NewLaunches, Rockets } from "../presentation/pages";

const ContentProviders = () => {
	const { t } = useTranslation();

	return [
		{
			title: "Lançamentos",
			prefixUrlMatch: "lancamentos",
			background: theme.launchesColor,
			path: "/launches",
			component: <Launches title={t("launches.title")} />,
			anchors: [],
		},
		{
			title: "Foguetes",
			prefixUrlMatch: "foguetes",
			background: theme.rocketsColor,
			path: "/rockets",
			component: <Rockets title={t("rockets.title")} />,
			anchors: [],
		},
		{
			title: "Novos Lançamentos",
			prefixUrlMatch: "new-launches",
			background: theme.googleColor,
			path: "/new-launches",
			component: <NewLaunches title={t("new-launches.title")} />,
			anchors: [],
		},
	];
};

export default ContentProviders;
