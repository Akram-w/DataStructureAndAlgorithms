import { Injectable } from '@nestjs/common';

@Injectable()
export class NthHightestNumberService {
    /**
 * function to get third largest number from array
 * @param {array} array The array of number
 * @returns {string} The string describe about third largest number
 */
    findNthLargestAlgo(array: number[], nth: number) {
        if (Array.isArray(array)) {
            for (let outerLoop = 0; outerLoop < array.length; outerLoop++) {
                let largest: number = outerLoop;
               
                for (let innerLoop = outerLoop + 1; innerLoop < array.length; innerLoop++) {
                    let element = array[innerLoop];

                    if (!(Number.isNaN(+element))) {
                        if (+array[largest] < +array[innerLoop]) {
                            largest = innerLoop;
                        }
                    } else {
                        throw new Error("Elements should be numbers")
                    }
                }
                if (largest != outerLoop) {
                    [array[largest], array[outerLoop]] = [array[outerLoop], array[largest]];
                }
            }
            let response = array[nth - 1];
            return `${nth} Largest number is ${response}`;
        } else {
            throw new Error('Needed Array as input')
        }
    }

}
