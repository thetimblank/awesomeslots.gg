'use client';

import { createContext, useState } from 'react';

interface Symbol {
	name: string,
	symbol: string,
	odds: number,
	multiplier: number,
}

const symbols: Symbol[] = [
	{
		name: 'Fire',
		symbol: '🔥',
		odds: 1,
		multiplier: 777,
	},
	{
		name: 'Star',
		symbol: '⭐',
		odds: 2,
		multiplier: 777,
	},
	{
		name: 'Money',
		symbol: '💰',
		odds: 1,
		multiplier: 777,
	},
	{
		name: 'Trophy',
		symbol: '🏆',
		odds: 1,
		multiplier: 777,
	},
	{
		name: 'Seven',
		symbol: '7️⃣',
		odds: 1,
		multiplier: 777,
	},
]

const default_userdata = {
	balance: 100,
	symbols: symbols,
}

interface UserdataValues {
	changeUserdata: (to: Userdata) => void;
	userdata: Userdata;
}

export const UserdataContext = createContext<UserdataValues>({
	changeUserdata: () => {},
	userdata: default_userdata,
});

export const UserdataProvider = ({ children }: { children: React.ReactNode }) => {
	const [userdata, setUserdata] = useState<Userdata>(company_userdata);

	const changeUserdata = (to: Partial<Userdata>): void => {
		setUserdata({ ...userdata, ...to });
	};

	return <UserdataContext.Provider value={{ changeUserdata, userdata }}>{children}</UserdataContext.Provider>;
};