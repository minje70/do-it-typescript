// yield 키워드를 사용하지 않으면 done이 true가 된다.
export function* rangeGenerator(from: number, to: number) {
	let value = from;
	while (value < to) {
		yield value++;
	}
}
