import { Injectable, Inject } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DelegationTemplate } from '@repository/interface/delegate';
import { BaseRepositoryService } from '@repository/service/repository.service';
import { IUserArgumentMap } from '../repository/interface/argument-map';
import { IUserPrismaDelegate } from '../repository/interface/prisma.delegate';
import { IUserReturnMap } from '../repository/interface/return-map';
import { PRISMA_SERVICE_KEY } from '@prisma/module/prisma.key';

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
