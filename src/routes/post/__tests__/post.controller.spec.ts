import { Post } from '@prisma/client';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { IPostService } from '../repository/interface/service';
import { PostController } from '../controller/post.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { POST_SERVICE_KEY } from '../service/post.key';

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

const PostServiceMock = createMock<IPostService>({
  create: jest.fn(),
  delete: jest.fn(),
  findMany: jest.fn(),
  findUnique: jest.fn(),
  update: jest.fn(),
  upsert: jest.fn(),
});

describe('PostController Test Suite', () => {
  let postService: DeepMocked<IPostService>;
  let postController: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [{ provide: POST_SERVICE_KEY, useValue: PostServiceMock }],
    }).compile();

    postController = module.get<PostController>(PostController);
    postService = module.get<DeepMocked<IPostService>>(POST_SERVICE_KEY);
  });

  afterEach(() => jest.clearAllMocks());

  it('Should get all posts', async () => {
    postService.findMany.mockResolvedValue(Posts);
    const result = await postController.getAllPosts();
    expect(result).toEqual(Posts);
  });

  it('Should get post by id', async () => {
    postService.findUnique.mockResolvedValue(Posts[0]);
    const result = await postController.getPostById('1');
    expect(result).toEqual(Posts[0]);
  });

  it('Should create post', async () => {
    postService.create.mockResolvedValue(Posts[0]);
    const result = await postController.createPost({ title: 'Title 1' });
    expect(result).toEqual(Posts[0]);
  });

  it('Should update post', async () => {
    postService.update.mockResolvedValue(Posts[0]);
    const result = await postController.updatePost('1', { title: 'Title 2' });
    expect(result).toEqual(Posts[0]);
  });

  it('Should delete post', async () => {
    postService.delete.mockResolvedValue(Posts[0]);
    const result = await postController.deletePost('1');
    expect(result).toEqual(Posts[0]);
  });
});
