export function map<T, Q>(arr: T[], callback: (val: T) => Q): Q[] {
	let result: Q[] = [];
	arr.forEach((val) => {
		result = [...result, callback(val)];
	});
	return result;
}
