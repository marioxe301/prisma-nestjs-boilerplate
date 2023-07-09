import { IService } from 'src/repository/interface/service';
import { IPostReturnMap } from './return-map';
import { IPostArgumentMap } from './argument-map';

export type IPostService = IService<IPostArgumentMap, IPostReturnMap>;
