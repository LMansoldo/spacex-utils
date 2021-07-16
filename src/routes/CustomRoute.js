import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const CustomRoute = ({ component, ...rest }) => (
	<Route {...rest} component={component} />
);

CustomRoute.propTypes = {
	component: PropTypes.node.isRequired,
};

export default CustomRoute;
