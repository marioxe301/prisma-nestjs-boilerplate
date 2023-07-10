import { IService } from '@repository/interface/service';
import { IUserArgumentMap } from './argument-map';
import { IUserReturnMap } from './return-map';

export type IUserService = IService<IUserArgumentMap, IUserReturnMap>;
