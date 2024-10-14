/*
 * Smart Hono Bun
 * A web template project for Deno
 * Copyright (c) 2024 Alessio Saltarin
 * ISC License
 *
 */

import type { FC } from 'hono/jsx'
import { Layout } from "./layout";

const Home: FC = () => {
    return (
        <Layout>
            <h1>Hello Hono!</h1>
            <a className="button" href="/learnmore">Learn more</a>
        </Layout>
    )
}

export default Home;

