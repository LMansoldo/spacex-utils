import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Menu } from "./presentation/components";
import { AVAILABLE_ROUTES } from "./services/contentProviders";

const App = () => (
	<Router>
		<Menu routes={AVAILABLE_ROUTES} />
		<Switch>
			{AVAILABLE_ROUTES.map(({ path, component }, index) => (
				<Route key={`route-${path}-${index}`} path={path}>
					{component}
				</Route>
			))}
		</Switch>
	</Router>
);

export default App;
