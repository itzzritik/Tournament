/* eslint-disable react/no-danger */
'use client';

import { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import { Button, themeController, useXTheme } from 'xtreme-ui';

const ThemeIcon = {
	light: 'f185',
	dark: 'f6c3',
	system: 'f390',
};
const themeSchemeList = ['light', 'dark', 'system'] as const;

export default function ThemeController () {
	const { themeScheme, setThemeScheme, setThemeColor } = useXTheme();

	const onClick = () => {
		const current = themeSchemeList.indexOf(themeScheme);
		setThemeScheme(themeSchemeList[(current + 1) % themeSchemeList.length]);
	};

	useEffect(() => {
		try {
			const scheme = (localStorage.getItem('xThemeScheme'))?.replaceAll('"', '') as 'light' | 'dark' | 'system';
			console.log(scheme);
			setThemeScheme(scheme);
			setThemeColor('violet');
		}
		catch (e) {
			console.log();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: themeController(themeScheme, 'violet') }} />
			<ToastContainer position='bottom-right' theme={themeScheme === 'light' ? 'light' : 'dark'} />
			<Button type='secondary' size='mini' label={themeScheme} icon={ThemeIcon[themeScheme]} iconType='solid' onClick={onClick} />
		</>
	);
}
