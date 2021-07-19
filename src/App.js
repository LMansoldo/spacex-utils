import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Layout from './presentation/components/Layout';
import ContentProviders from './services/contentProviders';
import SpaceContext from './context';

const App = () => {
	const AVAILABLE_ROUTES = ContentProviders();
	const { t } = useTranslation();

	return (
		<SpaceContext.Provider value={{ t, routes: AVAILABLE_ROUTES }}>
			<Router>
				<Suspense fallback={<LinearProgress color="secondary" />}>
					<Layout routes={AVAILABLE_ROUTES}>
						<Switch>
							<Redirect from="/spacex-utils" to="/launches" />
							{AVAILABLE_ROUTES.map(({ path, component }, index) => (
								<Route
									key={`route-${path}-${index}`}
									path={path}
									render={component}
								/>
							))}
						</Switch>
					</Layout>
				</Suspense>
			</Router>
		</SpaceContext.Provider>
	);
};

export default App;
