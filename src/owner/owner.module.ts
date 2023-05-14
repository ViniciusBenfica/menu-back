import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { PrismaService } from 'src/database/prisma.service';
import { OwnerRepository } from './owner.repository';

@Module({
  controllers: [OwnerController],
  providers: [OwnerService, PrismaService, OwnerRepository],
})
export class OwnerModule {}
