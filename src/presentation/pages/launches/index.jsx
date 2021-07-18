import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Card } from '../../components';

const Launches = () => {
	const GET_LAUNCHES = gql`
		query GetLaunchList {
			launches(limit: 10) {
				id
				mission_name
				launch_date_local
				details
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
					id
					name
					type
				}
			}
		}
	`;

	const { data, loading, error } = useQuery(GET_LAUNCHES);

	if (loading) return <span>loading...</span>;
	if (error || !data) return <p>ERROR</p>;

	return (
		<div>
			{data.launches &&
				data.launches.map((launch) => (
					<Card
						key={`spcx-launch-${launch.id}`}
						name={launch.mission_name}
						rocket={launch.rocket.rocket_name}
						place={launch.launch_site.site_name_long}
						date={launch.launch_date_local}
						description={launch.details}
						shipList={launch.ships}
					/>
				))}
		</div>
	);
};

export default Launches;
