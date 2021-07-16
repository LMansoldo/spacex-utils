import React from "react";
import PropTypes from "prop-types";

const RootLayout = ({ children }) => <div>{children}</div>;

RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RootLayout;
