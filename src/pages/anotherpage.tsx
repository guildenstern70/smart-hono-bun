/*
 * Smart Hono Bun
 * A web template project for Deno
 * Copyright (c) 2024 Alessio Saltarin
 * ISC License
 *
 */

import type { FC } from 'hono/jsx'
import { Layout } from "./layout";

const AnotherPage: FC = () => {
    return (
        <Layout>
            <h1>Learn More Here</h1>
            <p>And when you're done, you may</p>
            <a className="button" href="/">Go back home</a>
        </Layout>
    )
}

export default AnotherPage;
