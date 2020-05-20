import { ParameterizedContext } from 'koa';
import { Db } from './common/types';

declare module 'koa' {
  interface Context extends ParameterizedContext {
    tx: Db;
  }
}
