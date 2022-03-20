import React from "react";
import axios from "axios";

import Head from "next/head";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
  return (
    item && (
      <>
        <Head>
          <meta name={"description"} content={item.description} />
          <title>Product | {item.name}</title>
        </Head>
        {name} 환경입니다.
        <Item item={item} />
      </>
    )
  );
};

export default Post;

// 서버 사이드 렌더링
// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
//
//   const res = await axios.get(API_URL);
//   const data = res.data;
//
//   return { props: { item: data, name: process.env.name } };
// }

// 정적 파일 렌더링
export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: false, // 동적으로 정적 파일을 생성 할지 여부
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}

/*
 * # Next.js 모든 페이지는 사전 렌더링 된다. (Pre-rendering)
 * - 더 좋은 퍼포먼스
 * - 검색엔진최적화(SEO)
 *
 * # Pre-rendering 의 두가지 형태
 * - 정적 생성
 * - Server Side Rendering (SSR, Dynamic Rendering)
 * (차이점 = 언제 html 파일을 생성하는가에 있음)
 *
 * [정적 생성]
 * - 프로젝트가 빌드하는 시점에 html 파일들이 생성
 * - 모든 요청에 재사용
 * - 퍼포먼스 이유로 Next.js는 정적 생성을 권고
 * - 정적 생성된 페이지들은 CDN 에서 캐시
 * - getStaticProps / getStaticPaths
 *
 * [서버 사이드 렌더링]
 * - 항상 최신 상태 유지
 * - getServerSideProps
 *
 * */
