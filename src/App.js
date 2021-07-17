import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './presentation/components';
import ContentProviders from './services/contentProviders';

const App = () => {
	const AVAILABLE_ROUTES = ContentProviders();
	return (
		<Router>
			<Menu routes={AVAILABLE_ROUTES} />
			<Suspense fallback={<span>loading</span>}>
				<Switch>
					{AVAILABLE_ROUTES.map(({ path, component }, index) => (
						<Route
							key={`route-${path}-${index}`}
							path={path}
							render={component}
						/>
					))}
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
