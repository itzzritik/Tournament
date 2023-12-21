import { useState } from 'react';

import { Button } from 'xtreme-ui';

import { useData } from '#components/context/useContext';

import { TTeam } from '../../types/tournament';

import Player from './Player';
import styles from './team.module.scss';

export default function Team ({ team, gameIndex, teamIndex }: TTeamProps) {
	const { addPlayer, updatePlayer, deletePlayer } = useData();
	const [addActive, setAddActive] = useState(false);

	const onAdd = (name: string, age: string) => {
		addPlayer(name, age, gameIndex, teamIndex);
		setAddActive(false);
	};

	return (
		<div className={styles.team}>
			<div className={styles.header}>
				<p className={styles.teamTitle}>{team.team_name} ({team?.players?.length})</p>
				<Button
					className={styles.add}
					icon={addActive ? 'f077' : 'e59e'}
					iconType='solid'
					size='mini'
					onClick={() => setAddActive((v) => !v)}
				/>
			</div>
			<div className={styles.players}>
				{addActive && <Player newPlayer player={{ name: '', age: '' }} onSave={onAdd} />}
				{
					team?.players?.map?.((player, playerIndex) => (
						<Player
							key={playerIndex}
							player={player}
							onSave={(name, age) => updatePlayer(name, age, gameIndex, teamIndex, playerIndex)}
							onDelete={() => deletePlayer(gameIndex, teamIndex, playerIndex)}
						/>
					))
				}
			</div>
		</div>
	);
}

type TTeamProps = {
	team: TTeam
	gameIndex: number
	teamIndex: number
}
