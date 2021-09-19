import { createRangeIterable } from './srcs/createRangeIterable';
import { generator } from './srcs/generator';
import { rangeGenerator } from './srcs/rangeGenerator';
// for of 테스트 (튜플돌릴 때 잘 동작하나)
{
	type testType = string | number;
	const arr = ['mijeong', 28];

	for (const val of arr) {
		console.log(val);
	}
}

// 반복기와 반복기 제공자
{
	const iterator = createRangeIterable(1, 3 + 1);
	while (true) {
		const { value, done } = iterator.next();
		if (done) break;
		console.log(value);
	}
}

// generator 생성기
{
	for (let value of generator()) {
		console.log(value);
	}
}

// setInterval 함수
// {
// 	const period = 1000;
// 	let count = 0;
// 	console.log('program started...');
// 	const id = setInterval(() => {
// 		if (count >= 3) {
// 			clearInterval(id);
// 			console.log('program finished...');
// 		} else {
// 			console.log(++count);
// 		}
// 	}, period);
// }

//iterator 테스트
{
	const iterator = rangeGenerator(0, 3 + 1);
	// while로 테스트
	while (true) {
		const { value, done } = iterator.next();
		if (done) {
			break;
		}
		console.log(value);
	}
	// {
	// 	const { value, done } = iterator.next();
	// 	console.log(value);
	// }
}
