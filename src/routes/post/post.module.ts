import { Module } from '@nestjs/common';
import { PRISMA_SERVICE_KEY } from 'src/prisma/prisma.key';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostController } from './controller/post.controller';
import { POST_SERVICE_KEY } from './service/post.key';
import { PostService } from './service/post.service';

@Module({
  providers: [
    { provide: POST_SERVICE_KEY, useClass: PostService },
    { provide: PRISMA_SERVICE_KEY, useClass: PrismaService },
  ],
  controllers: [PostController],
})
export class PostModule {}
