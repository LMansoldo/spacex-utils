import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import CustomRoute from "./CustomRoute";
import { AVAILABLE_ROUTES } from "../services/contentProviders";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			{AVAILABLE_ROUTES.map((route) =>
				route.routes.map(({ path, component }, index) => (
					<CustomRoute
						exact
						path={path}
						component={component}
						isPrivate
						key={index}
					/>
				))
			)}
		</Switch>
	</BrowserRouter>
);

export default Routes;
