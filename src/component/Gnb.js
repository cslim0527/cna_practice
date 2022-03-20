import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

const Gnb = () => {
  const router = useRouter();
  const [active, setActive] = useState("home");

  const goLink = (e, data) => {
    const { name } = data;
    setActive(name);
    if (name === "home") {
      router.push(`/`);
    } else {
      router.push(`/${name}`);
    }
  };

  return (
    <nav>
      <Menu inverted>
        <Menu.Item name="home" active={active === "home"} onClick={goLink} />
        <Menu.Item name="shop" active={active === "shop"} onClick={goLink} />
        <Menu.Item name="admin" active={active === "admin"} onClick={goLink} />
      </Menu>
    </nav>
  );
};

export default Gnb;
