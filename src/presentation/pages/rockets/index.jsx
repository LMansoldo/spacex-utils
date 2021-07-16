import React from "react";
import PropTypes from "prop-types";

const Rockets = ({ title }) => <div>{title} rockets </div>;

Rockets.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Rockets;
