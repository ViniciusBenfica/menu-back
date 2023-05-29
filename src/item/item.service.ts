import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemRepository } from './item.repository';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepository: ItemRepository) {}

  async create(
    createItemDto: CreateItemDto,
  ): Promise<{ message: string; data: Item }> {
    const newItem = await this.itemRepository.create(createItemDto);
    return { message: 'Item created successfully', data: newItem };
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
