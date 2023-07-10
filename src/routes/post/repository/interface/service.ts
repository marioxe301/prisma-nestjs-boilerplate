import { IService } from '@repository/interface/service';
import { IPostArgumentMap } from './argument-map';
import { IPostReturnMap } from './return-map';

export type IPostService = IService<IPostArgumentMap, IPostReturnMap>;
