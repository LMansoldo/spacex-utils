import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AVAILABLE_ROUTES } from "./services/contentProviders";

const App = () => (
	<Router>
		<nav>
			<ul>
				<li>
					<Link to="/launches">Launches</Link>
				</li>
				<li>
					<Link to="/rockets">Rockets</Link>
				</li>
				<li>
					<Link to="/new-launches">New launches</Link>
				</li>
			</ul>
		</nav>
		<Switch>
			{AVAILABLE_ROUTES.map((route) =>
				route.routes.map(({ path, component }, index) => (
					<Route key={`route-${path}-${index}`} path={path}>
						{component}
					</Route>
				))
			)}
		</Switch>
	</Router>
);

export default App;
