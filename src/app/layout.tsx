import { ReactNode } from 'react';

import { type Metadata } from 'next';
import ThemeController from '#components/base/ThemeController';

import { GlobalProvider } from '#components/context';
import { montserrat } from '#utils/helper/fontHelper';

import './globals.scss';


export const metadata: Metadata = {
	title: 'Tournament Dashboard',
	description: 'Generated by create next app',
};

export default function RootLayout ({ children }: IRootProps) {
	return (
		<html lang='en' className={montserrat.variable}>
			<body>
				<GlobalProvider>
					<ThemeController />
					{children}
				</GlobalProvider>
			</body>
		</html>
	);
}

interface IRootProps {
	children?: ReactNode;
}
