'use client';

import { UIEvent, useState } from 'react';

import clsx from 'clsx';
import { Button, Icon, Spinner } from 'xtreme-ui';

import { useData } from '#components/context/useContext';
import Team from '#components/layout/Team';
import ThemeController from '#components/layout/ThemeController';

import styles from './page.module.scss';

export default function Home () {
	const { fetchData, tournament, tournamentLoading } = useData();
	const [floatHeader, setFloatHeader] = useState(false);

	const onScroll = (event: UIEvent<HTMLDivElement>) => {
		if ((event.target as HTMLDivElement).scrollTop >= 40) return setFloatHeader(true);
		return setFloatHeader(false);
	};

	return (
		<main className={clsx(styles.home, floatHeader && styles.float)} onScroll={onScroll}>
			<div className={styles.header}>
				<Icon code='f45f' size={36} type='duotone' />
				<p>Tournaments</p>
				<Button className={styles.refresh} type='secondary' icon='f021' iconType='solid' size='mini' onClick={fetchData} />
				<ThemeController />
			</div>
			<div className={styles.content}>
				{
					tournamentLoading
						? <Spinner className={styles.spinner} fullpage label='Fetching Games...' />
						: tournament?.map?.((game, gameIndex) => (
							<div className={styles.game} key={gameIndex}>
								<p className={styles.gameTitle}>{game.game}</p>
								<div className={styles.teams}>
									{
										game?.teams?.map?.((team, teamIndex) => (
											<Team key={teamIndex} team={team} gameIndex={gameIndex} teamIndex={teamIndex} />
										))
									}
								</div>
							</div>
						))
				}
			</div>
		</main>
	);
}
