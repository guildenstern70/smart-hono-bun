/*
 * Smart Hono Bun
 * A web template project for Deno
 * Copyright (c) 2024 Alessio Saltarin
 * ISC License
 *
 */

import { css, Style } from 'hono/css'
import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
    return (
        <html>
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css"
                  integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>
                <Style>{css`
                    main {
                        padding: 2rem;
                        margin: 100px;
                    }
            `}</Style>
            <title>Smart Hono Bun</title>
        </head>
        <body>
            <main>
                {props.children}
            </main>
        </body>
        </html>
    )
}
