import { createMock } from '@golevelup/ts-jest';
import { TestingModule, Test } from '@nestjs/testing';
import { Prisma, User } from '@prisma/client';
import { DelegationTemplate } from '@repository/interface/delegate';
import { UserService } from '../service/user.service';
import { PRISMA_SERVICE_KEY } from '@prisma/module/prisma.key';

type UserDelegation = Prisma.UserDelegate<DelegationTemplate>;

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

const UserPrismaServiceMock = {
  user: createMock<UserDelegation>({
    create: jest.fn(),
    delete: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    upsert: jest.fn(),
  }),
};

describe('UserService Test Suite', () => {
  let userService: UserService;
  let prismaService: typeof UserPrismaServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PRISMA_SERVICE_KEY,
          useValue: UserPrismaServiceMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService =
      module.get<typeof UserPrismaServiceMock>(PRISMA_SERVICE_KEY);
  });

  afterEach(() => jest.clearAllMocks());

  it('Should get all users', async () => {
    prismaService.user.findMany.mockResolvedValue(Users);
    const result = await userService.findMany({});
    expect(result).toEqual(Users);
  });

  it('Should get user by id', async () => {
    prismaService.user.findUnique.mockResolvedValue(Users[0]);
    const result = await userService.findUnique({ where: { id: '1' } });
    expect(result).toEqual(Users[0]);
  });

  it('Should create a user', async () => {
    prismaService.user.create.mockResolvedValue(Users[0]);
    const result = await userService.create({
      data: {
        email: 'john@email.com',
      },
    });
    expect(result).toEqual(Users[0]);
  });

  it('Should update a user', async () => {
    prismaService.user.update.mockResolvedValue(Users[0]);
    const result = await userService.update({
      where: { id: '1' },
      data: { name: 'John Doe' },
    });
    expect(result).toEqual(Users[0]);
  });

  it('Should delete a user', async () => {
    prismaService.user.delete.mockResolvedValue(Users[0]);
    const result = await userService.delete({ where: { id: '1' } });
    expect(result).toEqual(Users[0]);
  });
});
