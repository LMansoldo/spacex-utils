import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Menu = ({ routes }) => (
	<div>
		<nav>
			<ul>
				{routes.map(({ path, prefixUrlMatch, title }, index) => (
					<Link to={`${path}`} key={`${prefixUrlMatch}-${index}`}>
						{title}
					</Link>
				))}
			</ul>
		</nav>
	</div>
);

Menu.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
