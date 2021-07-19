import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import { gql, useQuery } from '@apollo/client';
import { RocketCard, Button } from '../../components';
import SpaceContext from '../../../context';

import { Container } from '../../../styles/shared';
import { FilterAndSearch } from '../styled';

const Rockets = () => {
	const { t } = useContext(SpaceContext);
	const [limitCounter, setLimitCounter] = useState(0);
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

	if (loading)
		return (
			<div>
				<LinearProgress color="secondary" />
			</div>
		);
	if (error || !data) return <p>ERROR</p>;

	const handleCards = () => {
		if (!data.launches && !data.launches.rocket) return null;
		const mappedData = data.launches.map((item) => item);
		const rocketData = mappedData.map((item) => item.rocket);
		const rockets = rocketData.map((r) => r.rocket);
		const mappedRockets = rockets.map((rocket) => rocket);
		return mappedRockets.map((rocket) => (
			<RocketCard
				key={`spcx-launch-${rocket.id}`}
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

	const handleQueryLimit = () => {
		setLimitCounter(limitCounter + 1);

		if (limitCounter > 1) {
			setLimitCounter(0);
		}

		switch (limitCounter) {
			case 1:
				return setLimit('25');
			case 2:
				return setLimit('50');
			default:
				return setLimit('10');
		}
	};

	return (
		<Container>
			<FilterAndSearch>
				<TextField
					style={{ width: 250, background: '#fff' }}
					label={t('search.label')}
					margin="normal"
					onChange={(e) =>
						setTimeout(() => setSearchName(e.target.value), [2000])
					}
					size="small"
					variant="outlined"
				/>
				<Button onClick={() => handleQueryLimit()}>{`${t(
					'showing-label'
				)}: ${limit}`}</Button>
			</FilterAndSearch>
			{handleCards()}
		</Container>
	);
};

export default Rockets;
