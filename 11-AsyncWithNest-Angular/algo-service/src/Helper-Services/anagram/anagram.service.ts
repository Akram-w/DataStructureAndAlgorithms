import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {
    /**
     * function to check compare two words and find anagrom
     * @param {string} firstWord The first word 
     * @param {string} secondWord The second word to check anagrom with firstWord
     * @returns {boolean} The status whether the second word is anagrom of firstWord
     */
     findAnagramAlgo(firstWord, secondWord) {
        let firstWordArray = Array.from(firstWord);
        let secondWordArray = Array.from(secondWord);
        let status = false;
    
        if (firstWordArray.length != secondWordArray.length) {
            return false;
        }
    
        for (let i = 0; i < secondWordArray.length; i++) {
            let value = secondWordArray[i];
            status = false;
            for (let j = 0; j < firstWordArray.length; j++) {
                if (value == firstWordArray[j]) {
                    status = true;
                    firstWordArray.splice(j, 1);
                    break;
                }
            }
            if (!status) {
                return false;
            }
        }
        if (firstWordArray.length) {
            return false;
        }
        return status;
    }
}
