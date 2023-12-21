import { useData } from '#components/context/useContext';

import { TTeam } from '../../types/tournament';

import Player from './Player';
import styles from './team.module.scss';

export default function Team ({ team, gameIndex, teamIndex }: TTeamProps) {
	const { updatePlayer } = useData();

	return (
		<div className={styles.team}>
			<p className={styles.teamTitle}>{team.team_name} ({team?.players?.length})</p>
			<div className={styles.players}>
				{
					team?.players?.map?.((player, playerIndex) => (
						<Player key={playerIndex} player={player} onSave={(a, b) => updatePlayer(a, b, gameIndex, teamIndex, playerIndex)} />
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
