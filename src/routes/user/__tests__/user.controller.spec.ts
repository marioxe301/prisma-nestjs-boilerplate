import { User } from '@prisma/client';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { IUserService } from '../repository/interface/service';
import { UserController } from '../controller/user.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { USER_SERVICE_KEY } from '../service/user.key';

const Users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@email.com',
  },
  {
    id: '2',
    name: 'James Smith',
    email: 'james@email.com',
  },
];

const UserServiceMock = createMock<IUserService>({
  create: jest.fn(),
  delete: jest.fn(),
  findMany: jest.fn(),
  findUnique: jest.fn(),
  update: jest.fn(),
  upsert: jest.fn(),
});

describe('UserController Test Suite', () => {
  let userService: DeepMocked<IUserService>;
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: USER_SERVICE_KEY, useValue: UserServiceMock }],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<DeepMocked<IUserService>>(USER_SERVICE_KEY);
  });

  afterEach(() => jest.clearAllMocks());

  it('Should get all users', async () => {
    userService.findMany.mockResolvedValue(Users);
    const result = await userController.getAllUsers();
    expect(result).toEqual(Users);
  });

  it('Should get user by id', async () => {
    userService.findUnique.mockResolvedValue(Users[0]);
    const result = await userController.getUserById('1');
    expect(result).toEqual(Users[0]);
  });

  it('Should create user', async () => {
    userService.create.mockResolvedValue(Users[0]);
    const result = await userController.createUser({ email: 'john@email.com' });
    expect(result).toEqual(Users[0]);
  });

  it('Should update user', async () => {
    userService.update.mockResolvedValue(Users[0]);
    const result = await userController.updateUser('1', { name: 'John Doe' });
    expect(result).toEqual(Users[0]);
  });

  it('Should delete user', async () => {
    userService.delete.mockResolvedValue(Users[0]);
    const result = await userController.deleteUser('1');
    expect(result).toEqual(Users[0]);
  });
});
