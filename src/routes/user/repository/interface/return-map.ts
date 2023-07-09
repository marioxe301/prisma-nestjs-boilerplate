import { User } from '@prisma/client';
import { IReturnMap } from 'src/repository/interface/return-map';

export class IUserReturnMap implements IReturnMap {
  create: User;
  delete: User;
  findMany: User[];
  findUnique: User;
  update: User;
  upsert: User;
}
