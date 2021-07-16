import React from "react";
import PropTypes from "prop-types";

const NewLaunches = ({ title }) => <div>{title} new launches </div>;

NewLaunches.propTypes = {
	title: PropTypes.string.isRequired,
};

export default NewLaunches;
