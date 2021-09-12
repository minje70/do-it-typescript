export function makePerson(name: string, age: number) {
	return { name: name, age: age };
}

export function testMakePerson() {
	console.log(makePerson('mijeong', 28), makePerson('hyeonkim', 30));
}
