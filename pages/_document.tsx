import React from "react";

import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
                  ? 'dark'
                  : 'light'
      }
      document.documentElement.classList.add(getUserPreference())
    `;

    const logging = `
      if (window.location.hostname !== 'localhost' && window.location.hostname === 'tranmani.com' && window.location.pathname === '/') {
        fetch('https://quiet-sun-b23e.tranmani.workers.dev').then((response) => {})
      }
    `;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {/* <script dangerouslySetInnerHTML={{ __html: logging }} /> */}
            <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
