import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import menudata from "../../src/Component/menu.js";
import axios from "axios";

function Menu() {
  const { state } = useLocation();
  const categoryData = state.category;

  const [menuItem, setMenuItem] = useState([]);
  let url =
    "http://localhost:8090/menu/get-menu-by-category?category=" + categoryData;

  // setMenuItem(menudata);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("url" + res.data);
        setMenuItem(res.data);
      })
      .catch((error) => {
        console.log(err);
        res.send(error);
      });
  }, []);
  let category = state.category;
  let categoryHeading = "";

  switch (category.toLowerCase()) {
    case "fries":
      categoryHeading =
        "Fries: Because adulting is hard,but eating fries is easy";
      break;
    case "sandwich":
      categoryHeading = "Sandwiches that'll make you say,I'm stuffed!!";
      break;
    case "burger":
      categoryHeading = "Burger o'clock:because it's always time for a burger";
      break;
    case "sandwich":
      categoryHeading = "Sandwiches that'll make you say,I'm stuffed!!";
      break;
    case "sandwich":
      categoryHeading = "Sandwiches that'll make you say,I'm stuffed!!";
      break;
    default:
      categoryHeading = category;
  }

  return (
    <div className="container-fluid section" id="mainMenu">
      <h3>{categoryHeading}</h3>
      <div
        className="row cardItem m-4 " id="menuRow"
      >
        {menuItem.map((menu, index) => (
          <div className="card col mt-4 p-3 offset-1" id="menuContent">
            <MenuItem menuData={menu} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
