import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class OwnerRepository {
  constructor(private prisma: PrismaService) {}
  async create(createOwnerDto: CreateOwnerDto): Promise<CreateOwnerDto> {
    const ownerExists = await this.prisma.owner.findUnique({
      where: { email: createOwnerDto.email },
    });

    if (ownerExists) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    return await this.prisma.owner.create({ data: createOwnerDto });
  }

  async findAll(): Promise<CreateOwnerDto[]> {
    return await this.prisma.owner.findMany();
  }

  async findOne(id: number): Promise<CreateOwnerDto> {
    const owner = await this.prisma.owner.findUnique({
      where: { id },
    });

    return owner;
  }
}
