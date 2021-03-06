import React from "react";
import { Layout, Article } from "../src/composants";

const ErrorPage = () => (
  <Layout>
    <Article>
      <h1>Erreur d&apos;aiguillage !</h1>
      <h3>Impossible de trouver la page demandée.</h3>
    </Article>
  </Layout>
);

export default ErrorPage;
