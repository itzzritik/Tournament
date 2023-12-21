import { useLayoutEffect, useState } from 'react';

import { Button, Icon, Textfield } from 'xtreme-ui';

import { TPlayer } from '../../types/tournament';

import styles from './player.module.scss';

export default function Player ({ player, newPlayer = false, onSave, onDelete }: TPlayerProps) {
	const [localName, setLocalName] = useState(player?.name);
	const [localAge, setLocalAge] = useState(player?.age.toString());

	const saveDisabled = localName === player?.name && localAge.toString() === player?.age.toString();
	const addDisabled = !localName || !localAge.toString();

	useLayoutEffect(() => {
		setLocalName(player?.name);
		setLocalAge(player?.age.toString());
	}, [player]);

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
				className={newPlayer ? styles.add : styles.save}
				label={newPlayer ? 'Add' : 'save'}
				type='primary'
				disabled={newPlayer ? addDisabled : saveDisabled}
				onClick={() => onSave(localName, localAge)}
			/>
			{
				!newPlayer &&
				<Icon
					className={styles.cancel}
					code={saveDisabled ? 'f1f8' : 'f1da'}
					type='light'
					size={14}
					onClick={() => {
						if (saveDisabled) return onDelete?.();
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
	newPlayer?: boolean
	onSave: (name: string, age: string) => void
	onDelete?: () => void
}
