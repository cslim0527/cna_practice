import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Item from "../../src/component/Item";
import { Loader } from "semantic-ui-react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const [item, setItem] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getItemDetailData = () => {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getItemDetailData();
    }
  }, [id]);

  return isLoading ? (
    <Loader inline={"centered"} active>
      ..상품 불러오는중..
    </Loader>
  ) : (
    <Item item={item} />
  );
};

export default Post;

/*
 * # Next.js 모든 페이지는 사전 렌더링 된다. (Pre-rendering)
 * - 더 좋은 퍼포먼스
 * - 검색엔진최적화(SEO)
 *
 * # Pre-rendering의 두가지 형태
 * - 정적 생성
 * - Server Side Rendering (SSR, Dynamic Rendering)
 * (차이점 = 언제 html 파일을 생성하는가에 있음)
 *
 * [정적 생성]
 * - 프로젝트가 빌드하는 시점에 html파일들이 생성
 * - 모든 요청에 재사용
 * - 퍼포먼스 이유로 Next.js는 정적 생성을 권고
 * - 정적 생성된 페이지들은 CDN에서 캐시
 * - getStaticProps / getStaticPaths
 *
 * [서버 사이드 렌더링]
 * - 항상 최신 상태 유지
 * - getServerSideProps
 *
 * */
