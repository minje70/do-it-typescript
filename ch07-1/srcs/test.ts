import { readFileSync, readFile } from 'fs';
import { readFilePromise } from './readFIlePromise';

// {
// 	// 동기로 파일 읽기
// 	console.log('read package.json using synchronous api...');
// 	const buffer: Buffer = readFileSync('./package.json');
// 	console.log(buffer.toString());

// 	// 비동기로 파일 읽기
// 	readFile('./package.json', (error: Error | null, buffer: Buffer) => {
// 		console.log('read package.json using asynchronous api...');
// 		console.log(buffer.toString());
// 	});

// 	// Promise와 async/await 구문을 사용
// 	const readFilePromise = (filename: string): Promise<string> =>
// 		new Promise<string>((resolve, reject) => {
// 			readFile(filename, (error: Error | null, buffer: Buffer) => {
// 				if (error) reject(error);
// 				else resolve(buffer.toString());
// 			});
// 		});
// 	(async () => {
// 		const content = await readFilePromise('./package.json');
// 		console.log('read package.json using Promise and async/await...');
// 		console.log(content);
// 	})();
// }

// // Promise
// // readFilePromise 테스트
// {
// 	readFilePromise('../package.json')
// 		.then((content: string) => {
// 			console.log(content);
// 			return readFilePromise('../tsconfig.json');
// 		})
// 		.then((content: string) => {
// 			console.log(content);
// 			return readFilePromise('.');
// 		})
// 		.catch((err: Error) => console.log('error:', err.message))
// 		.finally(() => console.log('프로그램 종료'));
// }

// // every
// {
// 	const arr = [1, 2, 3, 4, 5];
// 	const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// 	console.log(arr.every((value: number) => value < 6));
// 	console.log(arr2.every((value: number) => value < 6));
// }

// // promise.all, promise.race
// {
// 	Promise.race([
// 		Promise.resolve(1),
// 		Promise.resolve(2),
// 		// Promise.reject(3),
// 		Promise.resolve(4),
// 	])
// 		.then((value) => console.log(value))
// 		.catch((reason) => console.log(reason));
// }

// async, await
{
	const test = async (check: boolean) => {
		const value = await Promise.resolve(1);
		if (check) await Promise.reject(new Error('error!@#!@#'));
		console.log(`test: ${value}`);
		return 'hello';
	};
	test(false)
		.then((value: string) => console.log(value))
		.catch((err: Error | null) => {
			if (err) console.log(err.message);
		});
}
