import React from "react";
import { Button, Divider } from "semantic-ui-react";

const Item = ({ item }) => {
  console.log("item", item);
  const { image_link, name, price, description } = item;
  return (
    <article className={"item-detail-wrapper"}>
      <div className={"detail-inner"}>
        <div className={"detail-img"}>
          <img src={image_link} alt="" />
        </div>

        <div className={"detail-info"}>
          <strong className={"detail-name"}>{name}</strong>
          <strong className={"detail-price"}>${price}</strong>

          <Button color={"orange"}>구매하기</Button>
        </div>
      </div>

      <Divider />

      <div className={"detail-desc"}>
        <b>Description</b>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Item;

/*
* {
    "id": 452,
    "brand": "maybelline",
    "name": "Maybelline Face Studio Master Hi-Light Light Booster Blush ",
    "price": "14.99",
    "price_sign": null,
    "currency": null,
    "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/e8c59b78ebeaec5c4b6aeba49a9ff0f6_ra,w158,h184_pa,w158,h184.png",
    "product_link": "https://well.ca/products/maybelline-face-studio-master_88836.html",
    "website_link": "https://well.ca",
    "description": "Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert \nbalance of shade + shimmer illuminator for natural glow. Skin goes \nsoft-lit with zero glitz.\n\n\t\tFor Best Results: Brush over all shades in palette and gently sweep over \ncheekbones, brow bones, and temples, or anywhere light naturally touches\n the face.\n\n\t\t\n\t\n\n                    ",
    "rating": 5,
    "category": "powder",
    "product_type": "blush",
    "tag_list": [],
    "created_at": "2016-10-01T18:35:07.476Z",
    "updated_at": "2017-12-23T20:51:17.460Z",
    "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/452.json",
    "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/452/original/open-uri20171223-4-1pmofky?1514062277",
    "product_colors": []
  }
* */
