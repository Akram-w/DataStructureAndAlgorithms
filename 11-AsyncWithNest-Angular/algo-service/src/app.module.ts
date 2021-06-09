import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnagramService } from './Helper-Services/anagram/anagram.service';
import { LetterOccuranceService } from './helper-services/letter-occurance/letter-occurance.service';
import { NthHightestNumberService } from './helper-services/nth-hightest-number/nth-hightest-number.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AnagramService, LetterOccuranceService, NthHightestNumberService],
})
export class AppModule {}
