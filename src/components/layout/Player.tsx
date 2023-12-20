import { useState } from 'react';

import { Button, Textfield } from 'xtreme-ui';

import { TPlayer } from '../../types/tournament';

import styles from './player.module.scss';

export default function Player ({ player }: TPlayerProps) {
	const [localName, setLocalName] = useState(player?.name);
	const [localAge, setLocalAge] = useState(player?.age?.toString());

	const saveDisabled = localName === player?.name && localAge === player?.age?.toString();

	return (
		<div className={styles.player}>
			<Textfield
				className={styles.name}
				placeholder='Player Name'
				icon='f007'
				value={localName}
				onChange={(e) => setLocalName(e.target.value)}
			/>
			<Textfield
				className={styles.age}
				placeholder='Age'
				value={localAge}
				type='number'
				onChange={(e) => setLocalAge(e.target.value)}
			/>
			<Button className={styles.save} label='save' icon='f00c' type='secondary' disabled={saveDisabled} />
		</div>
	);
}

type TPlayerProps = {
	player: TPlayer
}
