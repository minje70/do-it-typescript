export function fold<T>(
	arr: T[],
	callback: (result: T, val: T) => T,
	initialVal: T
): T {
	let result = initialVal;
	for (let i = 0; i < arr.length; ++i) {
		result = callback(result, arr[i]);
	}
	return result;
}
