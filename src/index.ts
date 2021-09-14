import { IPerson, makePerson, Person } from './person/Person';
import Chance from 'chance';
import * as R from 'ramda';

const chance = new Chance();
let person: IPerson[] = R.range(0, 2).map(
	(n: number) => new Person(chance.name(), n)
);

console.log(person);

// const testMakePerson = (): void => {
// 	let jane: IPerson = makePerson('jane');
// 	let mijeong: IPerson = makePerson('mijeong');
// 	console.log(jane, mijeong);
// };

// testMakePerson();
