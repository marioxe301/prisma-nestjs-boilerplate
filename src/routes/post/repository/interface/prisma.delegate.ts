import { Prisma } from '@prisma/client';
import { DelegationTemplate } from 'src/repository/interface/delegate';

export interface IPostPrismaDelegate {
  post: Prisma.PostDelegate<DelegationTemplate>;
}
