import { Hono } from "hono";

const app = new Hono();

app.use(async (context, next) => {
	await next();
	context.header("X-Powered-By", "Remix and Hono");
});

/** @private */
export default app;
