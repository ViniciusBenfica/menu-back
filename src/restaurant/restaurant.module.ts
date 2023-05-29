import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { PrismaService } from 'src/database/prisma.service';
import { RestaurantRepository } from './restaurant.repository';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService, PrismaService, RestaurantRepository],
})
export class RestaurantModule {}
