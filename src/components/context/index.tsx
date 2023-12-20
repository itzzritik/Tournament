/* eslint-disable react/no-danger */
'use client';

import { ReactNode } from 'react';

import { XProvider, themeController } from 'xtreme-ui';

import { DataProvider } from './Data';

export const GlobalProvider = ({ children }: ProviderProps) => {
	return (
		<XProvider>
			<DataProvider>
				<script dangerouslySetInnerHTML={{ __html: themeController(undefined, 'violet') }} />
				{children}
			</DataProvider>
		</XProvider>
	);
};
interface ProviderProps {
    children?: ReactNode
}
