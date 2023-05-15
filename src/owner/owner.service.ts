import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerRepository } from './owner.repository';

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}
  async create(
    createOwnerDto: CreateOwnerDto,
  ): Promise<{ message: string; data: CreateOwnerDto }> {
    const newOwner = await this.ownerRepository.create(createOwnerDto);
    return { message: 'Owner created successfully', data: newOwner };
  }

  async findAll(): Promise<{ message: string; data: CreateOwnerDto[] }> {
    const listOwner = await this.ownerRepository.findAll();
    return { message: 'Return owner list', data: listOwner };
  }

  async findOne(
    id: number,
  ): Promise<{ message: string; data: CreateOwnerDto }> {
    if (isNaN(id)) {
      throw new HttpException('Invalid id parameter', HttpStatus.BAD_REQUEST);
    }
    const owner = await this.ownerRepository.findOne(id);
    return { message: 'Return owner', data: owner };
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
