import Koa from 'koa';
import logger from 'koa-logger';
import HelloworldRouter from './routers/helloworld.router';
import HelloworldService from './services/helloworld.service';
import pgPromise from 'pg-promise';

const app = new Koa();

const routers = [HelloworldRouter];
const services = [HelloworldService];
export const serviceInstances = services.map((s) => new s());
const instances = routers.map((r) => new r());

const c = pgPromise();

try {
  const db = c({
    // Probably shouldn't hardcode these
    host: 'localhost',
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });
  (async function () {
    await db.any(`select * from foo`);
  })();
} catch (e) {
  console.error(e);
}

app.use(logger());

instances.forEach((r) => {
  r.registerRoutes();
  app.use(r.routes());
  app.use(r.allowedMethods());
});

app.listen(3000);
