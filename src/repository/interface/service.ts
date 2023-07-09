import { IArgumentMap } from './argument-map';
import { IReturnMap } from './return-map';

export interface IService<T extends IArgumentMap, R extends IReturnMap> {
  create(data: T['create']): Promise<R['create']>;
  delete(data: T['delete']): Promise<R['delete']>;
  findMany(data: T['findMany']): Promise<R['findMany']>;
  findUnique(data: T['findUnique']): Promise<R['findUnique']>;
  update(data: T['update']): Promise<R['update']>;
  upsert(data: T['upsert']): Promise<R['upsert']>;
}
