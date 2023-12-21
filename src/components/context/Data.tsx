import { createContext, ReactNode, useEffect, useState } from 'react';

import { cloneDeep } from 'lodash';
import { toast } from 'react-toastify';

import { TTournament } from '../../types/tournament';

const DataDefault: TDataInitialType = {
	fetchData: () => {},
	tournament: [],
	tournamentLoading: true,
	addPlayer: () => {},
	updatePlayer: () => {},
	deletePlayer: () => {},
};

export const DataContext = createContext(DataDefault);
export const DataProvider = ({ children }: TDataProviderProps) => {
	const [tournament, setTournament] = useState(DataDefault.tournament);
	const [tournamentLoading, setTournamentLoading] = useState(DataDefault.tournamentLoading);

	const deletePlayer = (gameIndex: number, teamIndex: number, playerIndex: number) => {
		setTournament((data) => {
			const clone = cloneDeep(data);
			clone[gameIndex].teams[teamIndex].players.splice(playerIndex, 1);
			return clone;
		});
		toast.success('Player Deleted');
	};

	const addPlayer = (name: string, age: string, gameIndex: number, teamIndex: number) => {
		setTournament((data) => {
			const clone = cloneDeep(data);
			clone[gameIndex].teams[teamIndex].players.unshift({ name, age });
			return clone;
		});
		toast.success('New Player Added');
	};

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
		<DataContext.Provider value={{ fetchData, tournament, tournamentLoading, addPlayer, updatePlayer, deletePlayer }}>
			{children}
		</DataContext.Provider>
	);
};

export type TDataProviderProps = {
    children?: ReactNode
}

export type TDataInitialType = {
	fetchData: () => void
	tournament: TTournament,
	tournamentLoading: boolean,
	addPlayer: (name: string, age: string, gameIndex: number, teamIndex: number) => void
	updatePlayer: (name: string, age: string, gameIndex: number, teamIndex: number, playerIndex: number) => void
	deletePlayer: (gameIndex: number, teamIndex: number, playerIndex: number) => void
}
