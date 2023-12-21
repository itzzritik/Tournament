'use client';

import { ReactNode } from 'react';

import { XProvider } from 'xtreme-ui';

import { DataProvider } from './Data';

export const GlobalProvider = ({ children }: ProviderProps) => {
	return (
		<XProvider>
			<DataProvider>

				{children}
			</DataProvider>
		</XProvider>
	);
};
interface ProviderProps {
    children?: ReactNode
}
