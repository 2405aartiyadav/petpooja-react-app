import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Category() {
  let img_path = "/src/assets/";
  const [catData, setCatData] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const categoryName = new Set();
  useEffect(() => {
    axios
      .get("http://localhost:8090/category/getCategory")
      .then((res) => {
        setCatData(res.data);
        {
          catData.map((obj) => {
            categoryName.add(obj.name);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container category">
      <div
        className="row row-cols-3 mx-2 my-2
           d-flex 
           cardItem m-4"
      >
        {catData.map((cat, index) => (
          <div className="card col-3 mt-4 p-3 offset-1" id="cardcontent" key={index}>
            <img src={cat.imgUrl} alt="food_img" id="catImg" />
            <br />
           <button id="categoryBtn">
           <Link
              to="/menu"
              className="card-title align-items-strech"
              state={{ category: cat.name }}
            >
              {cat.name}
            </Link>
           </button>
          </div>
        ))}
      </div>
{/* 
      <hr />
      <Dashboard /> */}
    </div>
  );
}

export default Category;
