import React from "react";
import { Header } from "semantic-ui-react";

import Gnb from "./Gnb";

const Top = () => {
  return (
    <div>
      <header>
        <img src="/images/simson.png" alt="logo" />
        <Header as={"h1"}>Next.js</Header>
      </header>

      <Gnb />
    </div>
  );
};

export default Top;
