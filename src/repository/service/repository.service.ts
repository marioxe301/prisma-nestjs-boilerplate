import { Injectable } from '@nestjs/common';
import { IArgumentMap } from '../interface/argument-map';
import { IDelegate } from '../interface/delegate';
import { IReturnMap } from '../interface/return-map';

@Injectable()
export abstract class BaseRepositoryService<
  D extends IDelegate,
  T extends IArgumentMap,
  R extends IReturnMap,
> {
  constructor(protected delegate: D) {}

  public getDelegate(): D {
    return this.delegate;
  }

  public async create(args: T['create']): Promise<R['create']> {
    return this.delegate.create(args);
  }

  public async delete(args: T['delete']): Promise<R['delete']> {
    return this.delegate.delete(args);
  }

  public async findMany(args: T['findMany']): Promise<R['findMany']> {
    return this.delegate.findMany(args);
  }

  public async findUnique(args: T['findUnique']): Promise<R['findUnique']> {
    return this.delegate.findUnique(args);
  }

  public async update(args: T['update']): Promise<R['update']> {
    return this.delegate.update(args);
  }

  public async upsert(args: T['upsert']): Promise<R['upsert']> {
    return this.delegate.upsert(args);
  }
}
