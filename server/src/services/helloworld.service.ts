import { Db } from '../common/types';

export default class HelloworldService {
  async hello(tx: Db) {
    return tx.any(`select * from foo`);
  }
}
