import Head from "next/head";

const TheHead = ({ tabtitle }) => {
  return (
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="/dnnlogo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Definitely Not Netflix - Awesome movies online."
      />
      <link rel="apple-touch-icon" href="/dnnlogo.png" />

      <title>{tabtitle}</title>
    </Head>
  );
};

export default TheHead;
