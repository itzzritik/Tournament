'use client';

import { ReactNode } from 'react';

import { DataProvider } from './Data';

export const GlobalProvider = ({ children }: ProviderProps) => {
	return (
		<DataProvider>
			{children}
		</DataProvider>
	);
};
interface ProviderProps {
    children?: ReactNode
}
