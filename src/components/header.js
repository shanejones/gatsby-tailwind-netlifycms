import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-blue-500">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <span className="font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <nav
          className="md:block md:flex md:items-center w-full md:w-auto">

        </nav>
      </div>
    </header>
  );
}

export default Header;
