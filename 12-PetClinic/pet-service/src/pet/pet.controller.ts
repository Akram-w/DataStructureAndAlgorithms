import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { response } from 'express';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {

    constructor(private petService: PetService) { }

    @Get()
    findAll(): Promise<Pet[]> {
        return this.petService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Pet> {
        try {
            let repsonse = await this.petService.findOne(id);
            return repsonse;
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error:  e.message,
            }, HttpStatus.NOT_FOUND)
        }



    }

    @Post()
    create(@Body() pet: Pet): Promise<Pet> {
        return this.petService.create(pet);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() pet: Pet): Promise<any> {
        // return this.petService.update(id, pet);
        pet.id = +id;
        return this.petService.create(pet);

    }
    @Delete(':id')
    delete(@Param('id') id: number): Promise<any> {
        return this.petService.delete(id);
    }
}
