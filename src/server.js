import React from "react";
import Layout from "./components/Layout";
import express from "express";
import ReactDOMServer from "react-dom/server";

var app = express();

app.get( "/", ( req, res ) => {
    const jsx = (<Layout/>);
    const reactDom = ReactDOMServer.renderToStaticMarkup(jsx);

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );

app.listen(3000);

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${ reactDom }</div>
        </body>
        </html>
    `;
}

console.log("listen in port：3000");