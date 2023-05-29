import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from '../database/prisma.service';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemRepository {
  constructor(private prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.prisma.item.create({ data: createItemDto });
  }
}
