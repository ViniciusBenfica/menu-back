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
  let service: OwnerService;

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
    service = module.get<OwnerService>(OwnerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('list owner', () => {
    it('should return a owner list', async () => {
      const result = await controller.findAll();
      expect(result).toEqual(ownerList);
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('create owner', () => {
    it('should create a new owner', async () => {
      const body: Owner = {
        id: 2,
        name: 'teste',
        email: 'teste@gmail.com',
        password: '123',
      };

      const result = await controller.create(body);
      expect(result).toEqual(createOwner);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(body);
    });

    it('should thwor an exception', async () => {
      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error());
      expect(controller.create('')).rejects.toThrowError();
    });
  });
});
