import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { PrismaService } from '..//database/prisma.service';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Owner | null> {
    const ownerExists = await this.prisma.owner.findUnique({
      where: { email },
    });
    return ownerExists;
  }

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return await this.prisma.owner.create({ data: createOwnerDto });
  }

  async findAll(): Promise<Owner[]> {
    return await this.prisma.owner.findMany();
  }

  async findOne(id: number): Promise<Owner> {
    const owner = await this.prisma.owner.findUnique({
      where: { id },
    });

    return owner;
  }
}
