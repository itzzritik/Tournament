'use client';

import { ToastContainer } from 'react-toastify';
import { Button, useXTheme } from 'xtreme-ui';

const ThemeIcon = {
	light: 'f185',
	dark: 'f6c3',
	system: 'f390',
};
const themeSchemeList = ['light', 'dark', 'system'] as const;

export default function ThemeController () {
	const { themeScheme, setThemeScheme } = useXTheme();

	const onClick = () => {
		const current = themeSchemeList.indexOf(themeScheme);
		setThemeScheme(themeSchemeList[(current + 1) % themeSchemeList.length]);
	};

	return (
		<>
			<ToastContainer position='top-center' theme={themeScheme === 'light' ? 'light' : 'dark'} />
			<Button type='secondary' size='mini' label={themeScheme} icon={ThemeIcon[themeScheme]} iconType='solid' onClick={onClick} />
		</>
	);
}
