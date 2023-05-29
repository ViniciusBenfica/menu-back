import { Module } from '@nestjs/common';
import { OwnerModule } from './owner/owner.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [OwnerModule, RestaurantModule, ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
