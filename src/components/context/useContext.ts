import { useContext } from 'react';

import { DataContext } from './Data';

export const useData = () => useContext(DataContext);
