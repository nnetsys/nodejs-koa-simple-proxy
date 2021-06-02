import Koa from 'koa';
import proxy from 'koa-proxy';
import cors from '@koa/cors';
import dotenv from 'dotenv';

dotenv.config();

if(!process.env.PROXY_HOST) throw new Error('PROXY_HOST env not specified');

const app:Koa = new Koa();
app.use(cors());
app.use(proxy({
    host: process.env.PROXY_HOST
}));
app.listen(process.env.PORT || 3000);
