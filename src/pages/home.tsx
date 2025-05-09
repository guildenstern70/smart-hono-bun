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

const Home: FC = () => {
    return (
        <Layout>
            <h1>SmartHono</h1>
            <blockquote>
                <em>SmartHono is a web template for modern applications.</em>
            </blockquote>
            <div>
                <p>It uses the following technologies:
                <ul>
                    <li>
                        <a href={'https://hono.dev/'} target="_blank">Hono</a> - A fast and lightweight web framework for Bun.
                    </li>
                    <li>
                        <a href={'https://react.dev/'} target="_blank">React</a> - A JavaScript library for building user interfaces.
                    </li>
                    <li>
                        <a href={'https://www.typescriptlang.org/'} target="_blank">TypeScript</a> - A superset of JavaScript that adds static types.
                    </li>
                    <li>
                        <a href={'https://bun.sh/'} target="_blank">Bun</a> - A modern JavaScript runtime and bundler that is fast and efficient.
                    </li>
                    <li>
                        <a href={'https://milligram.io/'} target="_blank">Milligram</a> - A minimalist CSS framework for fast and clean designs.
                    </li>
                </ul>
                </p>
            </div>
            <p style={{ marginTop: '40px' }}>
            <a className="button" href="/learnmore">Learn more</a>
            </p>
        </Layout>
    )
}

const homePage = new Hono()
homePage.get('/', (c) => {
    return c.html(
        <Home />
    )
});


export default homePage;

