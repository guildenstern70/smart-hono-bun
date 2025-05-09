/*
 * Smart Hono Bun
 * A web template for modern websites
 * Copyright (c) 2024-25 Alessio Saltarin
 * ISC License
 *
 */

import { Hono } from 'hono';
import { serveStatic } from "@hono/node-server/serve-static"
import learnMorePage from "./pages/learn-more";
import firstGamePage from "./pages/first-game";
import homePage from "./pages/home";

const app = new Hono();

app.route('/', homePage);
app.route('/learnmore', learnMorePage);
app.route('/firstgame', firstGamePage);

app.use('/static/*', serveStatic({ root: './' }))

export default app;
