/* eslint-disable no-console */
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Card } from '../../components';

const Launches = () => {
	const GET_LAUNCHES = gql`
		query GetLaunchList {
			launchesPast(limit: 10) {
				id
				mission_name
				launch_date_local
				links {
					article_link
					video_link
				}
				launch_site {
					site_name_long
				}
				rocket {
					rocket_name
				}
				ships {
					name
					home_port
					image
				}
			}
		}
	`;

	const { data, loading, error } = useQuery(GET_LAUNCHES);

	if (loading) return <span>loading...</span>;
	if (error || !data) return <p>ERROR</p>;

	return (
		<div>
			{data.launchesPast &&
				data.launchesPast.map((launch) => (
					<Card
						key={`spcx-launch-${launch.id}`}
						name={launch.name}
						rocket={launch.rocket.rocket_name}
						place={launch.launch_site.site_name_long}
						date={launch.launch_date_local}
						description="description"
						shipList={launch.ships}
					/>
				))}
		</div>
	);
};

export default Launches;
