/*
 * Smart Hono Bun
 * A web template project for Deno
 * Copyright (c) 2024 Alessio Saltarin
 * ISC License
 *
 */

import { Hono } from 'hono'
import Home from './pages/home'
import AnotherPage from "./pages/anotherpage";

const app = new Hono()

const home =

app.get('/', (c) => {
  return c.html(
      <Home />
  )
});
app.get('/learnmore', (c) => {
  return c.html(
      <AnotherPage />
  )
});

export default app;
