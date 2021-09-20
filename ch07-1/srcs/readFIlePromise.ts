// import { readFile } from 'fs';

import { readFile } from 'fs';

export function readFilePromise(filename: string) {
	return new Promise(
		(resolve: (value: string) => void, reject: (error: Error) => void) => {
			readFile(filename, (error: Error | null, buffer: Buffer) => {
				if (error) reject(error);
				else resolve(buffer.toString());
			});
		}
	);
}
