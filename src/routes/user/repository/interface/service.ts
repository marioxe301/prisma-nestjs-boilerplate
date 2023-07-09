import { IService } from 'src/repository/interface/service';
import { IUserReturnMap } from './return-map';
import { IUserArgumentMap } from './argument-map';

export type IUserService = IService<IUserArgumentMap, IUserReturnMap>;
