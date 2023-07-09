import { Inject, Injectable } from '@nestjs/common';
import { IUserPrismaDelegate } from '../repository/interface/prisma.delegate';
import { BaseRepositoryService } from 'src/repository/service/repository.service';
import { Prisma } from '@prisma/client';
import { DelegationTemplate } from 'src/repository/interface/delegate';
import { IUserArgumentMap } from '../repository/interface/argument-map';
import { IUserReturnMap } from '../repository/interface/return-map';
import { PRISMA_SERVICE_KEY } from 'src/prisma/prisma.key';

@Injectable()
export class UserService extends BaseRepositoryService<
  Prisma.UserDelegate<DelegationTemplate>,
  IUserArgumentMap,
  IUserReturnMap
> {
  constructor(
    @Inject(PRISMA_SERVICE_KEY) readonly prisma: IUserPrismaDelegate,
  ) {
    super(prisma.user);
  }
}
