import { randomInt } from 'crypto';
import { range } from './src/range';
import { pureDelete } from './src/pureDelete';

// 배열의 map, reduce, filter 메서드 구현

// filter
{
	const arr: number[] = range(0, 11);
	// even
	const evenArr = arr.filter((val) => val % 2 === 0);
	console.log(evenArr);
}

// fold 대신 reduce를 사용한다.
{
	const arr: number[] = range(0, 6);
	const result: number = arr.reduce((result: number, val: number) => {
		return result + val;
	}, 0);
	console.log(`reduce 더하기 : ${result}`);
}

// readonly type 수정자를 사용하는 이유 : class, interface, 함수의 매개변수 등은 let, const로 변수를 선언할 수 없기 때문에
// readonly를 사용해야한다.
{
	class Person {
		name: string;
		readonly age: number;
		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}
	}
}

// 깊은 복사 테스트
{
	const object1 = [1, 2, 3, 4];
	const object2 = [2, 3, 4, 5];
	const gatheredObject = { object1, object2 };
	const copiedObject = { ...gatheredObject };

	const printTest = (topic: string) => {
		console.log(topic);
		console.log(`object1 : ${object1}`);
		console.log(`object2 : ${object2}`);
		console.log(
			`gatheredObject : ${gatheredObject.object1} , ${gatheredObject.object2}`
		);
		console.log(
			`copiedObject : ${copiedObject.object1} , ${copiedObject.object2}`
		);
		console.log('');
	};
	printTest('기본');

	gatheredObject.object1.push(5);
	printTest('gatherObject의 object1 변경');

	object2.push(6);
	printTest('그냥 object2 변경');
	// ...도 내부의 모든 객체가 다 깊은 복사가 되는것은 아니다.
}

// sort 확인
{
	const arr = range(0, 11);
	arr.map((val, index) => {
		arr[index] = randomInt(10);
	});
	console.log(arr);
	arr.sort();
	console.log(arr);
}

// pureDelete 확인
{
	const arr = range(0, 10);
	const afterArr = pureDelete(arr, (val) => val % 2 === 0);
	console.log(`arr : ${arr}`);
	console.log(`afterArr : ${afterArr}`);
}
// tuple
{
	const tuple: [string, number] = ['mijeong', 28];
	console.log(tuple);
}
