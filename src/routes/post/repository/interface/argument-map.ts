import { Prisma } from '@prisma/client';
import { IArgumentMap } from 'src/repository/interface/argument-map';

export class IPostArgumentMap implements IArgumentMap {
  create: Prisma.PostCreateArgs;
  delete: Prisma.PostDeleteArgs;
  findMany: Prisma.PostFindManyArgs;
  findUnique: Prisma.PostFindUniqueArgs;
  update: Prisma.PostUpdateArgs;
  upsert: Prisma.PostUpsertArgs;
}
