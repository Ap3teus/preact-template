import Router, { IRouterParamContext } from 'koa-router';
import { ParameterizedContext } from 'koa';
import { ApplicationContext } from './types';

interface RouteOptions {
  path: string | RegExp;
  method: 'get' | 'post' | 'put' | 'delete';
  handler: (ctx: ApplicationContext) => void | Promise<void>;
}

export default abstract class BaseRouter {
  private router: Router;

  constructor() {
    this.router = new Router();
  }

  routes() {
    return this.router.routes();
  }

  allowedMethods() {
    return this.router.allowedMethods();
  }

  abstract registerRoutes(): void;

  route(options: RouteOptions) {
    const method = this.router[options.method];
    method.apply(this.router, ([
      options.path,
      (ctx: any) => {
        options.handler(ctx);
      },
    ] as unknown) as Parameters<typeof method>);
  }
}
