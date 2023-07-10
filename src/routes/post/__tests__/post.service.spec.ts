import { createMock } from '@golevelup/ts-jest';
import { Post, Prisma } from '@prisma/client';
import { DelegationTemplate } from '@repository/interface/delegate';
import { PostService } from '../service/post.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PRISMA_SERVICE_KEY } from '@prisma/module/prisma.key';

type PostDelegation = Prisma.PostDelegate<DelegationTemplate>;

const Posts: Post[] = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Content 1',
    published: true,
    author_id: '1',
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'Content 2',
    published: false,
    author_id: '2',
  },
];

const PostPrismaServiceMock = {
  post: createMock<PostDelegation>({
    create: jest.fn(),
    delete: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    upsert: jest.fn(),
  }),
};

describe('PostService Test Suite', () => {
  let postService: PostService;
  let prismaService: typeof PostPrismaServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: PRISMA_SERVICE_KEY,
          useValue: PostPrismaServiceMock,
        },
      ],
    }).compile();

    postService = module.get<PostService>(PostService);
    prismaService =
      module.get<typeof PostPrismaServiceMock>(PRISMA_SERVICE_KEY);
  });

  afterEach(() => jest.clearAllMocks());

  it('Should get all posts', async () => {
    prismaService.post.findMany.mockResolvedValue(Posts);
    const result = await postService.findMany({});
    expect(result).toEqual(Posts);
  });

  it('Should get post by id', async () => {
    prismaService.post.findUnique.mockResolvedValue(Posts[0]);
    const result = await postService.findUnique({ where: { id: '1' } });
    expect(result).toEqual(Posts[0]);
  });

  it('Should create a post', async () => {
    prismaService.post.create.mockResolvedValue(Posts[0]);
    const result = await postService.create({
      data: {
        title: 'Post 1',
        content: 'Content 1',
        published: true,
        author_id: '1',
      },
    });
    expect(result).toEqual(Posts[0]);
  });

  it('Should update a post', async () => {
    prismaService.post.update.mockResolvedValue(Posts[0]);
    const result = await postService.update({
      where: { id: '1' },
      data: { title: 'Post 1' },
    });
    expect(result).toEqual(Posts[0]);
  });

  it('Should delete a post', async () => {
    prismaService.post.delete.mockResolvedValue(Posts[0]);
    const result = await postService.delete({ where: { id: '1' } });
    expect(result).toEqual(Posts[0]);
  });
});
