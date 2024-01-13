import { ReactNode, createContext, useMemo, useState } from "react";

export interface ContextType {
	isActive: number;
	handleActive: (index: number) => void;
}

export const AppContext = createContext<ContextType>({
	isActive: 0,
	handleActive: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	const [isActive, setIsActive] = useState<number>(0);

	const handleActive = (index: number) => {
		if (typeof index !== "number") return;
		setIsActive(index);
	};

	const value = useMemo(
		() => ({
			isActive,
			handleActive,
		}),
		[isActive],
	);

	return (
		<AppContext.Provider
			// Values to be shared
			value={value}
		>
			{children}
		</AppContext.Provider>
	);
};
