/*
 * Smart Hono Bun
 * A web template project for Deno
 * Copyright (c) 2024 Alessio Saltarin
 * ISC License
 *
 */

import { Hono } from 'hono'
import home from "./pages/home";
import anotherpage from "./pages/anotherpage";

const app = new Hono()

app.route('/', home)
app.route('/learnmore', anotherpage)

export default app
