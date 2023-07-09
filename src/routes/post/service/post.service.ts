import { Inject, Injectable } from '@nestjs/common';
import { IPostPrismaDelegate } from '../repository/interface/prisma.delegate';
import { BaseRepositoryService } from 'src/repository/service/repository.service';
import { Prisma } from '@prisma/client';
import { DelegationTemplate } from 'src/repository/interface/delegate';
import { IPostArgumentMap } from '../repository/interface/argument-map';
import { IPostReturnMap } from '../repository/interface/return-map';
import { PRISMA_SERVICE_KEY } from 'src/prisma/prisma.key';

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
