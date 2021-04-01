import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const characterCollection = new CharacterCollection('testw');

const sorter = new Sorter(characterCollection);
sorter.sort();

console.log('test', numbersCollection.data);
console.log('test', characterCollection.data);


