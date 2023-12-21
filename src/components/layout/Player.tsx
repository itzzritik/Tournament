import { useState } from 'react';

import { Button, Icon, Textfield } from 'xtreme-ui';

import { TPlayer } from '../../types/tournament';

import styles from './player.module.scss';

export default function Player ({ player, onSave }: TPlayerProps) {
	const [localName, setLocalName] = useState(player?.name);
	const [localAge, setLocalAge] = useState(player?.age);

	const saveDisabled = localName === player?.name && localAge.toString() === player?.age.toString();

	return (
		<div className={styles.player}>
			<Textfield
				className={styles.name}
				placeholder='Player Name'
				icon='f007'
				value={localName}
				onChange={(e) => setLocalName(e.target.value.trim())}
			/>
			<Textfield
				className={styles.age}
				placeholder='Age'
				value={localAge.toString()}
				type='number'
				onChange={(e) => setLocalAge(e.target.value.trim().toString())}
			/>
			<Button
				className={styles.save}
				label='save'
				type='primary'
				disabled={saveDisabled}
				onClick={() => onSave(localName, localAge)}
			/>
			{
				!saveDisabled &&
				<Icon
					className={styles.cancel}
					code='f1da'
					type='regular'
					size={12}
					onClick={() => {
						setLocalName(player?.name);
						setLocalAge(player?.age);
					}}
				/>
			}
		</div>
	);
}

type TPlayerProps = {
	player: TPlayer
	onSave: (name: string, age: string) => void
}
