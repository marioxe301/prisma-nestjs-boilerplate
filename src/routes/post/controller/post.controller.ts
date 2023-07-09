import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IPostService } from '../repository/interface/service';
import { POST_SERVICE_KEY } from '../service/post.key';
import { CreatePostDto, UpdatePostDto } from '../dto/post';
import { Post as TPost } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(
    @Inject(POST_SERVICE_KEY) private readonly postService: IPostService,
  ) {}

  @Get()
  async getAllPosts(): Promise<TPost[]> {
    const result = await this.postService.findMany({});
    return result;
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<TPost> {
    const result = await this.postService.findUnique({ where: { id } });
    return result;
  }

  @Post()
  async createPost(@Body() user: CreatePostDto): Promise<TPost> {
    const result = await this.postService.create({ data: user });
    return result;
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() post: UpdatePostDto,
  ): Promise<TPost> {
    const result = await this.postService.update({ where: { id }, data: post });
    return result;
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<TPost> {
    const result = await this.postService.delete({ where: { id } });
    return result;
  }
}
