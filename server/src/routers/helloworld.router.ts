import BaseRouter from '../common/baseRouter';
import HelloworldService from '../services/helloworld.service';
import { useService } from '../common/useService';

export default class HelloworldRouter extends BaseRouter {
  helloworldService: HelloworldService;

  constructor() {
    super();
    console.log('new router');
    this.helloworldService = useService(HelloworldService);
  }

  registerRoutes() {
    console.log('resgitering');
    this.route({
      path: '/hello',
      method: 'get',
      handler: async (ctx) => {
        console.log('helloo');
        ctx.body = await this.helloworldService.hello(ctx.state.tx);
      },
    });
  }
}
