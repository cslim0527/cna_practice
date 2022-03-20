import React from "react";
import { Header } from "semantic-ui-react";

import Gnb from "./Gnb";
import Link from "next/link";

const Top = () => {
  return (
    <div>
      <header>
        <Link href={"/"}>
          <a>
            <img src="/images/simson.png" alt="logo" />
            <Header as={"h1"}>Next.js</Header>
          </a>
        </Link>
      </header>

      <Gnb />
    </div>
  );
};

export default Top;
