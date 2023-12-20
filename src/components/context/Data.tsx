import { createContext, ReactNode, useEffect, useState } from 'react';

import { TTournament } from '../../types/tournament';

const DataDefault: TDataInitialType = {
	tournament: [],
	tournamentLoading: true,
};

export const DataContext = createContext(DataDefault);
export const DataProvider = ({ children }: TDataProviderProps) => {
	const [tournament, setTournament] = useState(DataDefault.tournament);
	const [tournamentLoading, setTournamentLoading] = useState(DataDefault.tournamentLoading);

	useEffect(() => {
		setTournamentLoading(true);
		fetch('https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e')
			.then((req) => req.json())
			.then(setTournament)
			.finally(() => setTournamentLoading(false));
	}, []);

	return (
		<DataContext.Provider value={{ tournament, tournamentLoading }}>
			{children}
		</DataContext.Provider>
	);
};

export type TDataProviderProps = {
    children?: ReactNode
}

export type TDataInitialType = {
	tournament?: TTournament,
	tournamentLoading: boolean,
}
