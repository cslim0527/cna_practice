import React from "react";
import Link from "next/link";
import { Grid } from "semantic-ui-react";

const ItemList = ({ list }) => {
  console.log("itemList", list);
  return (
    <Grid columns={3} className={"item-list-wrapper"}>
      <Grid.Row>
        {list.map((item) => (
          <Grid.Column key={item.id} className={"list-item"}>
            <Link href={`/view/${item.id}`}>
              <a>
                <img className={"item-img"} src={item.image_link} alt="" />
                <strong className={"item-name"}>{item.name}</strong>
                <span className={"item-detail"}>
                  {item.category && item.category + " -"} {item.product_type}
                </span>
                <span className={"item-price"}>${item.price}</span>
              </a>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ItemList;
