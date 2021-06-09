import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from "./app.service";

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('anagram')
  async getAnagram(@Query('firstword') firstWord: string, @Query('secondword') secondWord: string, @Res() response: Response) {
    console.log(firstWord, secondWord)
    let isAnagram = await this.appService.findArangram(firstWord, secondWord);
    let res = `The Word ${firstWord} ${isAnagram ? 'is' : 'is not'} Anagram to ${secondWord}`
    response.status(HttpStatus.OK).json(res);
  }

  @Get('occurances')
  async getOccurances(@Query('sentence') sentence: string) {
    return await this.appService.findLetterRepitition(sentence);
  }

  @Get('highest')
  async getHighest(@Query('array') array: number[], @Query('nth') nth: number, @Res() response: Response) {
    await this.appService.findNthLargest(array, nth).then(result => {
      response.status(HttpStatus.OK).json(result);
    }).catch(error => {
      response.status(HttpStatus.BAD_REQUEST).json(error.message)
    });
  }
}
