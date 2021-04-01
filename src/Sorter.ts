export class Sorter {
    constructor(public collection: number[] | string) { }

    sort(): void {
        const { length } = this.collection;

        for (let i: number = 0; i < length; i++) {
            for (let j: number = 0; j < length - i - 1; j++) {

                // if collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }

                // if collection is a string, do this logic instead
                // logic to compare and swap characters in a string
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}