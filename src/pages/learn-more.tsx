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

const LearnMore: FC = () => {

    const command = {
        marginRight: '0.5rem',
    };

    return (
        <Layout>
            <h1>Learn More Here</h1>
            <p>
                This minimalist web template is perfect for <b>single-page</b> or <b>small web sites</b>
                that need a fast responses and clean design.
            </p>
            <p>
                Now you can go home, or we can play a little game.
            </p>
            <div>
                <a style={command} className="button" href="/">Go back home</a>
                <a style={command} className="button button-outline" href="/firstgame">Let's play a game, shall we?</a>
            </div>
        </Layout>
    )
}

const learnMorePage = new Hono()
learnMorePage.get('/', (c) => {
    return c.html(
        <LearnMore />
    )
});

export default learnMorePage;
