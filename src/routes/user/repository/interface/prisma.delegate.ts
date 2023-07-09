import { Prisma } from '@prisma/client';
import { DelegationTemplate } from 'src/repository/interface/delegate';

export interface IUserPrismaDelegate {
  user: Prisma.UserDelegate<DelegationTemplate>;
}
