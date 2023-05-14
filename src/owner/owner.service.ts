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

  async findAll(): Promise<CreateOwnerDto[]> {
    return await this.ownerRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
