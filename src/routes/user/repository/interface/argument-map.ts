import { Prisma } from '@prisma/client';
import { IArgumentMap } from '@repository/interface/argument-map';

export class IUserArgumentMap implements IArgumentMap {
  create: Prisma.UserCreateArgs;
  delete: Prisma.UserDeleteArgs;
  findMany: Prisma.UserFindManyArgs;
  findUnique: Prisma.UserFindUniqueArgs;
  update: Prisma.UserUpdateArgs;
  upsert: Prisma.UserUpsertArgs;
}
