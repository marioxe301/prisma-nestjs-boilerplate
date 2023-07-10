import { Injectable, Inject } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DelegationTemplate } from '@repository/interface/delegate';
import { BaseRepositoryService } from '@repository/service/repository.service';
import { IPostArgumentMap } from '../repository/interface/argument-map';
import { IPostPrismaDelegate } from '../repository/interface/prisma.delegate';
import { IPostReturnMap } from '../repository/interface/return-map';
import { PRISMA_SERVICE_KEY } from '@prisma/module/prisma.key';

@Injectable()
export class PostService extends BaseRepositoryService<
  Prisma.PostDelegate<DelegationTemplate>,
  IPostArgumentMap,
  IPostReturnMap
> {
  constructor(
    @Inject(PRISMA_SERVICE_KEY) readonly prisma: IPostPrismaDelegate,
  ) {
    super(prisma.post);
  }
}
