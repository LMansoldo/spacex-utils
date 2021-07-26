import React, { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { gql, useQuery } from '@apollo/client';
import { RocketCard, Filter } from '../../components';

import { Container } from '../../../styles/shared';

const Rockets = () => {
	const [limitCounter, setLimitCounter] = useState(1);
	const [limit, setLimit] = useState('10');
	const [searchName, setSearchName] = useState('');
	const GET_ROCKETS = gql`
		query GetRocketsList {
			launches(sort: "rocket_name", limit: ${limit}, find: { rocket_name: "${searchName}" }) {
				rocket {
					rocket {
						active
						diameter {
							meters
						}
						height {
							meters
						}
						name
						stages
						payload_weights {
							kg
						}
						description
						engines {
							type
							number
							version
						}
						id
					}
				}
			}
		}
	`;

	const { data, loading, error } = useQuery(GET_ROCKETS);

	if (loading) return <LinearProgress color="secondary" />;
	if (error || !data) return <p>ERROR</p>;

	const handleCards = () => {
		if (!data.launches && !data.launches.rocket) return null;
		const mappedData = data.launches.map((item) => item);
		const rocketData = mappedData.map((item) => item.rocket);
		const rockets = rocketData.map((r) => r.rocket);
		const mappedRockets = rockets.map((rocket) => rocket);
		return mappedRockets.map((rocket, index) => (
			<RocketCard
				key={`spcx-launch-${rocket.id}-${index}`}
				name={rocket.name}
				status={rocket.active}
				diameter={rocket.diameter.meters}
				height={rocket.height.meters}
				stages={rocket.stages}
				description={rocket.description}
				charge={rocket.payload_weights}
				engines={rocket.engines}
			/>
		));
	};

	return (
		<Container>
			<Filter
				limit={limit}
				setLimit={setLimit}
				setSearch={setSearchName}
				setLimitCounter={setLimitCounter}
				limitCounter={limitCounter}
			/>
			{handleCards()}
		</Container>
	);
};

export default Rockets;
