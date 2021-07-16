import React from "react";
import PropTypes from "prop-types";

const Launches = ({ title }) => <div>{title} launches </div>;

Launches.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Launches;
