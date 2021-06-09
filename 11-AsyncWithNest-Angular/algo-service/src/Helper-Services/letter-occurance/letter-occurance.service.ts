import { Injectable } from '@nestjs/common';

@Injectable()
export class LetterOccuranceService {

    /**
 * function to get the count of each repitation of letter
 * @param {string} sentence String to get Repitation count
 * @returns {Object} A object from map which include letter and its count
 */
    findLetterRepitaion(sentence) {
        let array = Array.from<string>(sentence);
        let map = new Map();
        for (let i = 0; i < array.length; i++) {
            if (array[i].trim()) {
                let char = array[i].toLowerCase();
                if (map.has(char)) {
                    let value = map.get(char);
                    map.set(char, ++value);
                } else {
                    map.set(char, 1);
                }
            }
        }
        console.log(map)
        return Object.fromEntries(map);
    }
}
