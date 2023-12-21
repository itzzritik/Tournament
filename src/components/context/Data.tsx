import { createContext, ReactNode, useEffect, useState } from 'react';

import { cloneDeep } from 'lodash';
import { toast } from 'react-toastify';

import { TTournament } from '../../types/tournament';

const DataDefault: TDataInitialType = {
	tournament: [],
	tournamentLoading: true,
	updatePlayer: () => {},
};

export const DataContext = createContext(DataDefault);
export const DataProvider = ({ children }: TDataProviderProps) => {
	const [tournament, setTournament] = useState(DataDefault.tournament);
	const [tournamentLoading, setTournamentLoading] = useState(DataDefault.tournamentLoading);

	const updatePlayer = (name: string, age: string, gameIndex: number, teamIndex: number, playerIndex: number) => {
		setTournament((data) => {
			const clone = cloneDeep(data);
			clone[gameIndex].teams[teamIndex].players[playerIndex] = { name, age };
			return clone;
		});
		toast.success('Player Updated');
	};

	const fetchData = async () => {
		try {
			setTournamentLoading(true);

			const req = await fetch('https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e');
			const res = await req.json();
			setTournament(res);

			setTournamentLoading(false);
		}
		catch (e) {
			toast.error('Unable To Fetch Data');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<DataContext.Provider value={{ tournament, tournamentLoading, updatePlayer }}>
			{children}
		</DataContext.Provider>
	);
};

export type TDataProviderProps = {
    children?: ReactNode
}

export type TDataInitialType = {
	tournament: TTournament,
	tournamentLoading: boolean,
	updatePlayer: (name: string, age: string, gameIndex: number, teamIndex: number, playerIndex: number) => void
}
