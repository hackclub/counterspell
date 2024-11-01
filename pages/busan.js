import React, { useEffect } from "react";
import Head from "next/head";

export default function ExampleCity() {
  useEffect(() => {
    window.location.href = "https://counterspellbusan.com";
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Counterspell Busan...</title>
      </Head>
      <div>
        <p>Redirecting...</p>
      </div>
    </>
  );
}
