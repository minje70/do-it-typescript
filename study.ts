const arrow2 = (a: number, b: number) => {
	console.log(a);
	console.log(b);
};

arrow2(1, 2);

abstract class Animal {
	constructor(public name?: string, public age?: number) {}
	abstract say(): string;
}

class Cat extends Animal {
	say() {
		return '야옹';
	}
}

class Dog extends Animal {
	say() {
		return '멍멍';
	}
}

let animals: Animal[] = [new Cat('야옹이'), new Dog('멍멍이')];

animals[0].say();
animals[1].say();
