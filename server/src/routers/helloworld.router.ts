import BaseRouter from '../common/baseRouter';
import HelloworldService from '../services/helloworld.service';
import { useService } from '../common/useService';

export default class HelloworldRouter extends BaseRouter {
  helloworldService: HelloworldService;

  constructor() {
    super();
    this.helloworldService = useService(HelloworldService);
  }

  registerRoutes() {
    this.route({
      path: '/hello',
      method: 'get',
      handler: (ctx) => {
        ctx.body = this.helloworldService.hello();
      },
    });
  }
}
