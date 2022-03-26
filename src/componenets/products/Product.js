import React, { Fragment, useEffect, useState } from "react";
import ProductListComponent from "./Product-List";

const ProductComponent = (props) => {
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:8080/product-list')
        .then(response => response.json())
        .then(data => {
          setList(data);
          setSearchList(data);
        });
    }
    fetchData();
  }, [])

  const searchData = (e) => {
    e.preventDefault();
    const search = e.target.value;
    if (search === '') {
      setSearchList(list);
    } else {
      setSearchList(list.filter((el) => {
        return el.product_name.toLowerCase().includes(search.toLowerCase())
      }));
    }
  }

  return (
    <Fragment >
      <div className="page">
        <div className="page-container">
          <div className="search-container">
            <h1>Search</h1>
            <input type="text" id="" placeholder="Product name" onChange={searchData} />
          </div>
          <ProductListComponent list={list} searchList={searchList}></ProductListComponent>
        </div>
      </div>

    </Fragment>
  )
}

export default ProductComponent;