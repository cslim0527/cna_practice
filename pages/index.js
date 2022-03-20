import axios from "axios";
import { useEffect, useState } from "react";

import Head from "next/head";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // ### CSR
  return (
    <div>
      <Head>
        <title>HOME | Next.js</title>
        <meta name={"description"} content={"메인페이지 입니다."} />
      </Head>

      {isLoading ? (
        <Loader inline={"centered"} active>
          ..상품 불러오는중..
        </Loader>
      ) : (
        <>
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
        </>
      )}
    </div>
  );

  // return (
  //   <div>
  //     <Head>
  //       <title>HOME | Next.js</title>
  //       <meta name={"description"} content={"메인페이지 입니다."} />
  //     </Head>
  //
  //     <>
  //       <section className={"contents"}>
  //         <Header as={"h3"}>베스트 상품</Header>
  //         <Divider />
  //         <ItemList list={list.slice(0, 9)} />
  //       </section>
  //
  //       <section className={"contents"}>
  //         <Header as={"h3"}>신상품</Header>
  //         <Divider />
  //         <ItemList list={list.slice(9)} />
  //       </section>
  //     </>
  //   </div>
  // );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const apiUrl = process.env.apiUrl;
//   const res = await axios.get(apiUrl);
//   const data = res.data;
//
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       list: data,
//       name: process.env.name,
//     },
//   };
// }
