import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}
  async create(
    createOwnerDto: CreateOwnerDto,
  ): Promise<{ message: string; data: CreateOwnerDto }> {
    const ownerExists = await this.prisma.owner.findUnique({
      where: { email: createOwnerDto.email },
    });

    if (ownerExists) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    const newOwner = await this.prisma.owner.create({ data: createOwnerDto });
    return { message: 'Owner created successfully', data: newOwner };
  }

  async findAll(): Promise<CreateOwnerDto[]> {
    return await this.prisma.owner.findMany();
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
