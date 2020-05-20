import BaseRouter from '../common/baseRouter';
import HelloworldService from '../services/helloworld.service';
import { useService } from '../common/useService';

export default class HelloworldRouter extends BaseRouter {
  helloworldService: HelloworldService;

  constructor() {
    super();
    this.helloworldService = useService(HelloworldService);
    this.registerRoutes();
  }

  private registerRoutes() {
    this.route({
      path: '/hello',
      method: 'get',
      handler: async (ctx) => {
        ctx.body = await this.helloworldService.hello(ctx.tx);
      },
    });
  }
}
