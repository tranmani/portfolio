import { WEBSITE_URL } from "@/lib/constants";
import Head from "next/head";

export default function Meta({
  title = "tranmani",
  description = "Huy Tran's personal website",
  image = `${WEBSITE_URL}/api/og`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${WEBSITE_URL}/logo.webp`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="" />
      <meta name="twitter:site" content="@minhhuy8137" />
      <meta name="twitter:creator" content="@minhhuy8137" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
