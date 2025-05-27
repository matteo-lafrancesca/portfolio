import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";

const basePath = import.meta.env.PROD ? "/portfolio/" : "/";

const Tableau = () => {
  const [tableHtml, setTableHtml] = useState("");

  useEffect(() => {
    fetch(`${basePath}tableau.html`)
      .then((res) => res.text())
      .then((html) => setTableHtml(html));
  }, []);

  return (
    <Layout>
      <div className="overflow-auto p-4">
        {tableHtml ? (
          <div dangerouslySetInnerHTML={{ __html: tableHtml }} />
        ) : (
          <p>Chargement du tableau…</p>
        )}
      </div>
    </Layout>
  );
};

export default Tableau;