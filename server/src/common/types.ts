import { ParameterizedContext } from 'koa';
import HelloworldService from '../services/helloworld.service';
import { IDatabase } from 'pg-promise';
import { IClient } from 'pg-promise/typescript/pg-subset';

export type Db = IDatabase<{}, IClient>;

interface ApplicationState {
  tx: Db;
}

export type ApplicationContext = ParameterizedContext<ApplicationState>;
