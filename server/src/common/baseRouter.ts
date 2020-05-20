import router, { Router, Spec } from 'koa-joi-router';

export default abstract class BaseRouter {
  private router: router.Router;

  constructor() {
    this.router = router();
  }

  middleware() {
    return this.router.middleware();
  }

  route(route: Spec) {
    this.router.route(route);
  }
}
