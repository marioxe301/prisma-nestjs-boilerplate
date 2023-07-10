import { Prisma } from '@prisma/client';
import { DelegationTemplate } from '@repository/interface/delegate';

export interface IPostPrismaDelegate {
  post: Prisma.PostDelegate<DelegationTemplate>;
}
