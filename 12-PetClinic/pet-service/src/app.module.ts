import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetModule } from './pet/pet.module';

@Module({
  imports: [PetModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'petdb',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
