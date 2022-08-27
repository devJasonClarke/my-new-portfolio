import Head from "next/head";
const MetaTags = ({ title, description, image }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{`${title} | Dev Jason`}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#0c0c0c" />
      <meta name="description" content={description} />
      <meta itemProp="name" content={`${title} | Dev Jason`} />
      <meta itemProp="description" content={description} />
      <meta
        itemProp="image"
        content={
          image
            ? image
            : "https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <meta property="og:url" content="https://devjasonclarke.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Dev Jason`} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          image
            ? image
            : "https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Dev Jason`} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          image
            ? image
            : "https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
    </Head>
  );
};

export default MetaTags;
