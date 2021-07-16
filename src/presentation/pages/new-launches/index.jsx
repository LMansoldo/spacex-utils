import React from "react";
import PropTypes from "prop-types";

const NewLaunches = ({ title }) => <div>{title}</div>;

NewLaunches.propTypes = {
	title: PropTypes.string.isRequired,
};

export default NewLaunches;
