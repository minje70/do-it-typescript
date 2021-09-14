function add(first: number, second: number): number {
	return first + second;
}

interface IPerson {
	name: string;
	age: number;
	addAge: (first: number, second: number) => number;
}

{
	type StringAndNumber = (name: string, age: number) => void;
	const printNameAge: StringAndNumber = (name: string, age: number) => {
		console.log(name, age);
	};
	printNameAge('mijeong', 28);
}

// default 매개변수
function addOne(age: number = 10): number {
	return age + 1;
}

console.log(addOne(28));
console.log(addOne());
// 매개변수와 이름이 같은 이름을 가진 객체의 속성을 만들 수 있다.
function addOne2(age: number = 10): void {
	const test = { age };
	++test.age;
	console.log(test);
}
addOne2();

const addOne3 = (age: number = 10) => ({ age });
console.log(addOne3(15));

const makeObject = (key: string, value: string) => ({ [key]: value });

console.log(makeObject('mijeongKey', 'mijeongValue'));
