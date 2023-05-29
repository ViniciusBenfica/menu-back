import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { PrismaService } from '../database/prisma.service';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantRepository {
  constructor(private prisma: PrismaService) {}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return await this.prisma.restaurant.create({ data: createRestaurantDto });
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.prisma.restaurant.findMany();
  }

  async findOne(id: number): Promise<Restaurant> {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id },
    });

    return restaurant;
  }
}
