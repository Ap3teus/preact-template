import Koa from 'koa';
import logger from 'koa-logger';
import HelloworldRouter from './routers/helloworld.router';
import HelloworldService from './services/helloworld.service';

const app = new Koa();

const routers = [HelloworldRouter];
const services = [HelloworldService];
export const serviceInstances = services.map((s) => new s());
const instances = routers.map((r) => new r());

app.use(logger());

instances.forEach((r) => {
  r.registerRoutes();
  app.use(r.routes());
  app.use(r.allowedMethods());
});

app.listen(3000);
