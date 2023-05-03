import { Test, TestingModule } from '@nestjs/testing';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';

const ownerList: Owner[] = [
  { id: 1, name: 'teste', email: 'teste@gmail.com', password: '123' },
];

const createOwner: Owner = {
  id: 2,
  name: 'teste',
  email: 'teste@gmail.com',
  password: '123',
};

describe('OwnerController', () => {
  let controller: OwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnerController],
      providers: [
        {
          provide: OwnerService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(ownerList),
            create: jest.fn().mockResolvedValue(createOwner),
          },
        },
      ],
    }).compile();

    controller = module.get<OwnerController>(OwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('index', () => {
    it('should return a owner list', async () => {
      const body: Owner = {
        id: 2,
        name: 'teste',
        email: 'teste@gmail.com',
        password: '123',
      };

      const result = await controller.create(body);
      expect(result).toEqual(createOwner);
    });

    it('should create a new owner', async () => {
      const result = await controller.findAll();
      expect(result).toEqual(ownerList);
    });
  });
});
