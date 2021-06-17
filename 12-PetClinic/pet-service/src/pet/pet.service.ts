import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {

  constructor(
    @InjectRepository(Pet)
    private petRepo: Repository<Pet>
  ) { }

  async findAll(): Promise<Pet[]> {
    return await this.petRepo.find();
  }
  async findOne(id: number): Promise<Pet> {
    try {
      return await this.petRepo.findOneOrFail(id);
    } catch (e) {
      throw e;
    }

  }
  async create(pet: Pet): Promise<Pet> {
    console.log(pet)
    return await this.petRepo.save(pet);
  }
  async update(id: number, pet: Pet): Promise<Pet> {
    console.log(pet)
    return await this.petRepo.save({ id, ...pet });

  }
  async delete(id: number): Promise<void> {
    await this.petRepo.delete(id);
  }

}
