/*
 * Smart Hono Bun
 * A web template for modern websites
 * Copyright (c) 2024-25 Alessio Saltarin
 * ISC License
 *
 */

import type { FC } from 'hono/jsx'
import { Layout } from "./layout";
import { Hono } from "hono";

const FirstGame: FC = () => {
    return (
        <Layout>
            <h1>We play a little game</h1>
            <p>And when you're done, you may</p>
            <a className="button" href="/">Go back home</a>
        </Layout>
    )
}

const firstGamePage = new Hono()
firstGamePage.get('/', (c) => {
    return c.html(
        <FirstGame />
    )
});
export default firstGamePage;
