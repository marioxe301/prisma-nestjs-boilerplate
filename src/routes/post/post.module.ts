import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { POST_SERVICE_KEY } from './service/post.key';
import { PostService } from './service/post.service';
import { PRISMA_SERVICE_KEY } from '@prisma/module/prisma.key';
import { PrismaService } from '@prisma/module/prisma.service';

@Module({
  providers: [
    { provide: POST_SERVICE_KEY, useClass: PostService },
    { provide: PRISMA_SERVICE_KEY, useClass: PrismaService },
  ],
  controllers: [PostController],
})
export class PostModule {}
