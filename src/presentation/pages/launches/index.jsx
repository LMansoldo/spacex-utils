/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { gql, useQuery } from '@apollo/client';
import { Card, Button } from '../../components';
import SpaceContext from '../../../context';

import { Container } from '../../../styles/shared';
import { FilterAndSearch } from '../styled';

const Launches = () => {
	const { t } = useContext(SpaceContext);
	const [limitCounter, setLimitCounter] = useState(0);
	const [limit, setLimit] = useState('10');
	const [searchName, setSearchName] = useState('');

	const GET_LAUNCHES = gql`
		query GetLaunchList {
			launches(order: "desc", sort: "launch_date_utc", limit: ${limit}, find: {mission_name: "${searchName}"}) {
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
				<Autocomplete
					freeSolo
					selectOnFocus
					id="free-solo-2-demo"
					disableClearable
					onOpen={() => {
						if (data.launches.length <= 1) return setSearchName('');
					}}
					options={data.launches.map((option) => option.mission_name)}
					onChange={(e, v) => setSearchName(v)}
					renderInput={(params) => (
						<TextField
							{...params}
							style={{ width: 250 }}
							label="Search input"
							margin="normal"
							size="small"
							variant="outlined"
							InputProps={{ ...params.InputProps, type: 'search' }}
						/>
					)}
				/>
				<Button onClick={() => handleQueryLimit()}>{`${t(
					'showing-label'
				)}: ${limit}`}</Button>
			</FilterAndSearch>
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
