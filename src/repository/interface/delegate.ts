import { Prisma } from '@prisma/client';

export interface IDelegate {
  create(data: unknown): Promise<unknown>;
  delete(data: unknown): Promise<unknown>;
  findMany(data: unknown): Promise<unknown>;
  findUnique(data: unknown): Promise<unknown>;
  update(data: unknown): Promise<unknown>;
  upsert(data: unknown): Promise<unknown>;
}

export type DelegationTemplate =
  | Prisma.RejectOnNotFound
  | Prisma.RejectPerOperation;
