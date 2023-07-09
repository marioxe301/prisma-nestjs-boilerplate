import { Post } from '@prisma/client';
import { IReturnMap } from 'src/repository/interface/return-map';

export class IPostReturnMap implements IReturnMap {
  create: Post;
  delete: Post;
  findMany: Post[];
  findUnique: Post;
  update: Post;
  upsert: Post;
}
