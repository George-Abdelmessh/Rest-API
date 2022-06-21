import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Card from "../Card/Card";

const Search = () => {
  const [categoryList, setCategoryList] = useState();
  const [productList, setproductList] = useState();

  const GetCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategoryList(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetProducts = (categoryName) => {
    console.log(categoryName);
    axios
      .get("https://fakestoreapi.com/products/category/" + categoryName)
      .then((response) => {
        setproductList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="main">
        <div className="content">
          <button type="button" id="btn" onClick={() => GetCategory()}>
            Get Start
          </button>
        </div>
      </div>
      <div className="cat">
        {categoryList &&
          categoryList.map((i) => {
            return (
              <button
                type="button"
                className="cat-btn"
                key={i}
                onClick={() => GetProducts(i)}
              >
                {i}
              </button>
            );
          })}
      </div>
      <div className="products">
        {productList && (
          productList.map((i) => {
            return (
              <Card
                key = {i['id']} 
                image = {i['image']}
                title = {i['title']}
                price = {i['price']}
                rate = {i['rating']['rate']}
              />
            )
          })
        )}
      </div>
    </div>
  );
};

export default Search;
