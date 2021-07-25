import React, { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { gql, useQuery } from '@apollo/client';
import { Card, Filter } from '../../components';

import { Container } from '../../../styles/shared';

const Launches = () => {
	const [limit, setLimit] = useState('10');
	const [searchName, setSearchName] = useState('');

	const GET_LAUNCHES = gql`
		query GetLaunchList {
			launches(order: "desc", sort: "launch_date_utc", limit: ${limit}, find: {mission_name: "${searchName}"}) {
				id
				mission_name
				launch_date_local
				details
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

	if (loading) return <LinearProgress color="secondary" />;
	if (error || !data) return <p>ERROR</p>;

	return (
		<Container>
			<Filter limit={limit} setLimit={setLimit} setSearch={setSearchName} />
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
		</Container>
	);
};

export default Launches;
