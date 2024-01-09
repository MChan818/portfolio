export const sum = (a: number, b: number): number | null => {
	if (typeof a !== "number") return null;
	return a + b;
};
