/* eslint-disable react/display-name */
import React from 'react';
import { theme } from '../styles/variables';

const Launches = React.lazy(() => import('../presentation/pages/launches'));
const Rockets = React.lazy(() => import('../presentation/pages/rockets'));
const NewLaunches = React.lazy(() =>
	import('../presentation/pages/new-launches')
);

const ContentProviders = () => [
	{
		title: 'Lançamentos',
		prefixUrlMatch: 'lancamentos',
		background: theme.launchesColor,
		path: '/launches',
		component: () => <Launches />,
		anchors: [],
	},
	{
		title: 'Foguetes',
		prefixUrlMatch: 'foguetes',
		background: theme.rocketsColor,
		path: '/rockets',
		component: () => <Rockets />,
		anchors: [],
	},
	{
		title: 'Novos Lançamentos',
		prefixUrlMatch: 'new-launches',
		background: theme.googleColor,
		path: '/new-launches',
		component: () => <NewLaunches />,
		anchors: [],
	},
];

export default ContentProviders;
