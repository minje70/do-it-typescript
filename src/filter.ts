import { resourceLimits } from 'worker_threads';

export function filter<T>(arr: T[], callback: (val: T) => boolean): T[] {
	let result: T[] = new Array();
	arr.forEach((val) => {
		if (callback(val)) {
			result = [...result, val];
		}
	});
	return result;
}
