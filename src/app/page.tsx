'use client';

import { useData } from '#components/context/useContext';

import styles from './page.module.scss';

export default function Home () {
	const { tournament, tournamentLoading } = useData();

	console.log(tournament, tournamentLoading);
	return (
		<main className={styles.home} />
	);
}
