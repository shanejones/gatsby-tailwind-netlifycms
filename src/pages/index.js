import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        description="This is the Description"
        title="This is the HP titls"
      />

      <section className="text-center">
        <h1 className="text-2xl font-bold inline-block mb-8">
          Hey there! Welcome to your first Gatsby site.
        </h1>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold no-underline text-gray-900"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
