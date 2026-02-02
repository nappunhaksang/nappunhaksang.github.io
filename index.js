import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to nappunhaksang.github.io</title>
      </Head>

      <main>
        <h1>Success! nappunhaksang.github.io is working!</h1>
        <p>
          <Link href="/help">Help Center</Link>
        </p>
      </main>
    </>
  );
}
