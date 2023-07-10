import { Prisma } from '@prisma/client';
import { DelegationTemplate } from '@repository/interface/delegate';
export interface IUserPrismaDelegate {
  user: Prisma.UserDelegate<DelegationTemplate>;
}
