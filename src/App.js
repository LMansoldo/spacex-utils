import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './presentation/components/Layout';
import ContentProviders from './services/contentProviders';

const App = () => {
	const AVAILABLE_ROUTES = ContentProviders();
	const TranslateContext = React.createContext(null);
	const { t } = useTranslation();

	return (
		<TranslateContext.Provider translate={t}>
			<Router>
				<Suspense fallback={<span>loading</span>}>
					<Layout routes={AVAILABLE_ROUTES}>
						<Switch>
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
		</TranslateContext.Provider>
	);
};

export default App;
