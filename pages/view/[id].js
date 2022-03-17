import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Item from "../../src/component/Item";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const [item, setItem] = useState({});

  const getItemDetailData = () => {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getItemDetailData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
