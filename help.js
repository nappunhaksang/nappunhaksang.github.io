import Head from "next/head";
import { useEffect } from "react";

const HELP_URL = "https://chatbase.co/gUJdCgmiBultFCPtZPGXQ/help";

export default function Help() {
  useEffect(() => {
    window.location.replace(HELP_URL);
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Help Center</title>
        <meta httpEquiv="refresh" content={`0;url=${HELP_URL}`} />
      </Head>

      <main>
        <h1>Redirecting…</h1>
        <p>
          If you are not redirected automatically,{" "}
          <a href={HELP_URL}>open the Help Center</a>.
        </p>
      </main>
    </>
  );
}