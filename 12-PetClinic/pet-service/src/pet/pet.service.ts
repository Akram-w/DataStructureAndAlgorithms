import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {

  constructor(
    @InjectRepository(Pet)
    private petRepo: Repository<Pet>
  ) { }

  /**
   * function to get all the pets from server
   * @returns Promise<PET[]> 
   */
  async findAll(): Promise<Pet[]> {
    return await this.petRepo.find();
  }

  /**
   * function to get a specific pet according to given parameter
   * @param id number to find specific pet
   * @returns Promise<Pet> if pet exists otherwise throw error
   */
  async findOne(id: number): Promise<Pet> {
    try {
      return await this.petRepo.findOneOrFail(id);
    } catch (e) {
      throw e;
    }

  }

  /**
   * function to save new pet
   * @param pet Pet the pet object to save
   * @returns Promise<Pet> which saved in the db
   */
  async create(pet: Pet): Promise<Pet> {
    console.log(pet)
    return await this.petRepo.save(pet);
  }

  /**
   * function to update pet. if pet exists under that id it update otherwise save as new record
   * @param id number id number of the pet to save
   * @param pet Pet the Pet object to be updated
   * @returns Updated pet
   */
  async update(id: number, pet: Pet): Promise<Pet> {
    console.log(pet)
    return await this.petRepo.save({ id, ...pet });

  }

  /**
   * function to delete record from the server
   * @param id number pet id to be removed from the database
   */
  async delete(id: number): Promise<void> {
    await this.petRepo.delete(id);
  }

}
