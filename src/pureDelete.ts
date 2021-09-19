export function pureDelete<T>(arr: T[], cb: (val: T) => boolean): T[] {
	return arr.filter((val) => cb(val) === false);
}
