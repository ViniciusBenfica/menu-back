import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async create(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<{ message: string; data: Restaurant }> {
    const newRestaurant = await this.restaurantRepository.create(
      createRestaurantDto,
    );
    return { message: 'Restaurant created successfully', data: newRestaurant };
  }

  findAll() {
    return `This action returns all restaurant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
