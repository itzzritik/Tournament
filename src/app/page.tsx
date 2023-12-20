'use client';

import { Spinner } from 'xtreme-ui';

import { useData } from '#components/context/useContext';

import styles from './page.module.scss';

export default function Home () {
	const { tournament, tournamentLoading } = useData();

	if (tournamentLoading) return <Spinner fullpage label='Fetching Games...' />;

	return (
		<main className={styles.home}>
			{
				tournament?.map?.((game, i) => (
					<div key={i} />
				))
			}
		</main>
	);
}
