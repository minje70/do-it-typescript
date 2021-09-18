import { IPVersion } from 'net';
import { range } from './src/range';
import { fold } from './src/fold';
import { filter } from './src/filter';
import { map } from './src/map';

// 배열과 튜플
{
	const tmpArray = new Array(5);
	const tmpArray2: number[] = [1, 2, 3, 4];
	const notArray: { name: string; age?: number } = { name: 'mijeong' };
	// isArray

	console.log(Array.isArray(tmpArray2), Array.isArray(notArray));
}

// split, join
{
	const tmpString: string = 'h_e_l_l_o';
	const result = tmpString.split('_');
	console.log(result);

	const tmpArray = ['h', 'e', 'l', 'l', 'o'];
	const result2 = tmpArray.join();
	console.log(result2);
}

//비구조화 할당.
{
	const tmpArray: number[] = [1, 2, 3, 4, 5];
	const [a, b, c, d, e] = tmpArray;
	console.log(a, b, c, d, e);
}

// for in 구문
// 객체에만 할당이 가능하다. 배열도 객체이므로 할당이 가능하다.
// type을 정의해서 돌리는 경우에 문제가 발생한다.
// 배열이면 문제가 없는듯
{
	const tmpArray = [1, 'mijeong', 28, true];
	for (const index in tmpArray) {
		console.log(`for in array : ${tmpArray[index]}`);
	}
	for (const item of tmpArray) {
		console.log(`for of array : ${item}`);
	}
	console.log('');
	// string literal으로 지정이 되니 for in 문 안에서 사용하는 key값들을 'name' | 'age'로 바꿔준다.
	type objKey = 'name' | 'age';
	type IPerson = {
		name: string;
		age: number;
	};
	const tmpObject: IPerson = { name: 'mijeong', age: 28 };
	for (const element in tmpObject) {
		// type IPerson의 name이 string literal로 선언되어있기 때문에 오류가 생긴다.
		//${tmpObjedct[element]}에서
		const realElement = element as objKey;
		console.log(`for in object : ${element} , ${tmpObject[realElement]}`);
		// console.log(`for in object : ${element}`);
	}
	//
	// for (const item of tmpObject) {
	// 	console.log(`for of object : ${item}`);
	// }
}

// 제네릭 방식의 타입
{
	const justPrint = <T>(t: T): void => {
		console.log(t);
	};
	const num: number = 100;
	const str: string = 'hello';
	const bool: boolean = true;
	// <타입>을 넣지 않아도 된다. typescript에서 알아서 타입추론을 해준다.
	justPrint<number>(num);
	justPrint<string>(str);
	justPrint(bool);
}

// 명령형 프로그래밍과 선언형 프로그래밍의 차이
// 숫자 다 더하기.
{
	const arr = range(0, 100 + 1);
	console.log(arr);
	// 명령형
	let result = 0;
	for (let i = 0; i < arr.length; ++i) {
		result += arr[i];
	}
	console.log(`명령형 결과 : ${result}`);

	// 선언형
	result = fold(arr, (result: number, val: number) => result + val, 0);
	console.log(`선언형 결과 : ${result}`);
}

// filter 동작 확인
{
	const arr = range(0, 101);
	const resultArr = filter(arr, (val: number) => {
		if (val % 2 === 0) {
			return true;
		} else {
			return false;
		}
	});
	console.log(`filter 동작 확인 : ${resultArr}`);
}

// 홀수의 합 구하기.
{
	const arr: number[] = range(0, 101);
	const oddArr: number[] = filter(arr, (val: number) => {
		if (val % 2 === 0) {
			return false;
		} else {
			return true;
		}
	});
	const result = fold(
		oddArr,
		(result, val) => {
			return result + val;
		},
		0
	);
	console.log(`홀수는 : ${oddArr}`);
	console.log(`홀수의 합 합치기 : ${result}`);
}

// 짝수의 합 구하기
{
	const arr = range(0, 101);
	const evenArr: number[] = filter(arr, (val) => {
		if (val % 2 === 0) {
			return true;
		}
		return false;
	});
	console.log(
		fold(
			evenArr,
			(result, val) => {
				return result + val;
			},
			0
		)
	);
}

// 맵 테스트
{
	const arr = range(0, 101);
	const mapedArr = map(arr, (val) => {
		return val * val;
	});
	console.log(`mapedArr : ${mapedArr}`);
	const result = fold(
		mapedArr,
		(result, val) => {
			return result + val;
		},
		0
	);
	console.log(`fold arr : ${result}`);
}
