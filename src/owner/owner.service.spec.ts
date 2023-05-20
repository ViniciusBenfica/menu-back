import { Test, TestingModule } from '@nestjs/testing';
import { OwnerService } from './owner.service';
import { OwnerRepository } from './owner.repository';
import { Owner } from './entities/owner.entity';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { HttpStatus } from '@nestjs/common';

const owner: Owner = {
  id: 1,
  name: 'teste',
  email: 'teste@gmail.com',
  password: '123',
};

describe('OwnerService', () => {
  let service: OwnerService;
  let repository: OwnerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OwnerService,
        {
          provide: OwnerRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(owner),
            findByEmail: jest.fn().mockResolvedValue(owner),
          },
        },
      ],
    }).compile();

    service = module.get<OwnerService>(OwnerService);
    repository = module.get<OwnerRepository>(OwnerRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('create owner', () => {
    it('should create a new owner', async () => {
      const body: CreateOwnerDto = {
        name: 'teste',
        email: 'tste@gmail.com',
        password: '123',
      };

      jest.spyOn(repository, 'findByEmail').mockResolvedValueOnce(null);
      const result = await service.create(body);
      expect(result).toEqual({
        message: 'Owner created successfully',
        data: result.data,
      });
      expect(repository.findByEmail).toHaveBeenCalledTimes(1);
      expect(repository.create).toHaveBeenCalledTimes(1);
      expect(repository.create).toHaveBeenCalledWith(body);
    });

    it('should error when creating owner', async () => {
      const body: CreateOwnerDto = {
        name: 'teste',
        email: 'tste@gmail.com',
        password: '123',
      };

      jest.spyOn(repository, 'findByEmail').mockResolvedValueOnce(owner);

      try {
        await service.create(body);
      } catch (error) {
        expect(repository.findByEmail).toHaveBeenCalledTimes(1);
        expect(error.message).toBe('Email already exists');
        expect(error.getStatus()).toBe(HttpStatus.CONFLICT);
      }
    });
  });
});
