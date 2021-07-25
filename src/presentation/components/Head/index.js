import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({ title, description }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@300;400;600;700&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
	);
};

Head.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Head;
