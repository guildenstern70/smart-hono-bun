/*
 * Smart Hono Bun
 * A web template for modern websites
 * Copyright (c) 2024-25 Alessio Saltarin
 * ISC License
 *
 */

import { Hono } from 'hono';
import home from "./pages/home";
import anotherpage from "./pages/anotherpage";
import { serveStatic } from "@hono/node-server/serve-static"

const app = new Hono();

app.route('/', home);
app.route('/learnmore', anotherpage);

app.use('/static/*', serveStatic({ root: './' }))

export default app;
