import axios from "axios";
import { useEffect, useState } from "react";

import Head from "next/head";
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
  const API_URL =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const [list, setList] = useState([]);

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | Next.js</title>
      </Head>
      <section className={"contents"}>
        <Header as={"h3"}>베스트 상품</Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
      </section>

      <section className={"contents"}>
        <Header as={"h3"}>신상품</Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </section>
    </div>
  );
}
