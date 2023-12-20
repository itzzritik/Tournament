'use client';

import { UIEvent, useState } from 'react';

import clsx from 'clsx';
import { Spinner } from 'xtreme-ui';

import { useData } from '#components/context/useContext';
import Player from '#components/layout/Player';
import ThemeController from '#components/layout/ThemeController';

import styles from './page.module.scss';

export default function Home () {
	const { tournament, tournamentLoading } = useData();
	const [floatHeader, setFloatHeader] = useState(false);

	const onScroll = (event: UIEvent<HTMLDivElement>) => {
		if ((event.target as HTMLDivElement).scrollTop >= 40) return setFloatHeader(true);
		return setFloatHeader(false);
	};

	if (tournamentLoading) return <Spinner fullpage label='Fetching Games...' />;

	return (
		<main className={clsx(styles.home, floatHeader && styles.float)} onScroll={onScroll}>
			<div className={styles.header}>
				<p>Tournament Dashboard</p>
				<ThemeController />
			</div>
			<div className={styles.content}>
				{
					tournament?.map?.((game, i) => (
						<div className={styles.game} key={i}>
							<p className={styles.gameTitle}>{game.game}</p>
							<div className={styles.teams}>
								{
									game?.teams?.map?.((team, i) => (
										<div className={styles.team} key={i}>
											<p className={styles.teamTitle}>{team.team_name}</p>
											<div className={styles.players}>
												{
													team?.players?.map?.((player, i) => (
														<Player key={i} player={player} />
													))
												}
											</div>
										</div>
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
