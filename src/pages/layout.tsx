/*
 * Smart Hono Bun
 * A web template for modern websites
 * Copyright (c) 2024-25 Alessio Saltarin
 * ISC License
 *
 */

import './layout.css'
import { FC, memo } from "hono/jsx";
import { css, Style } from 'hono/css'
import { NavBar } from "../components/navbar";

export const Layout: FC = (props) => {

    const Header = memo(() => <NavBar />)

    return (
        <html>
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Smart Hono Bun</title>
            <Style>{css`
                    main {
                        padding: 2rem;
                        margin: 100px;
                    }
            `}</Style>
        </head>
        <body>
            <Header />
            <main>
                {props.children}
            </main>
        </body>
        </html>
    )
}
