"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../components/_utils/GlobalApi";
import ProductItem from "../../components/ProductItem";
import axios from "axios";
import Breadcrum from "../../components/Breadcrum";
import { usePathname } from "next/navigation";
import SkeltomProjectList from "../../components/Skeletion/SkeltomProjectList";

function Category({ params: { category } }) {
  const decodedCategory = decodeURI(category);
  const path = usePathname();
  const decodedPath = decodeURI(path);
  const [filterByCategory, setFilterByCategory] = useState([]);

  const getLatestProduct_ = async () => {
    try {
      const res = await GlobalApi.getLatestProduct();
      console.log(res.data);
      setFilterByCategory(res.data);
    } catch (error) {
      console.error("Error fetching latest product:", error);
    }
  };

  const tryClaa = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1337/api/products?filters[category][title][$eq]=${decodedCategory}&populate=*`
      );
      console.log(res.data.data, "direct Hit");

      setFilterByCategory(res.data.data);
    } catch (error) {
      console.log("Error in cat", error);
    }
  };

  useEffect(() => {
    if (category === "all") {
      getLatestProduct_();
    }
    tryClaa();
  }, [category, tryClaa]);
  
  
  return (
    <div className="p-5 py-13 px-20 md:px-26 ">
      <Breadcrum path={decodedPath} />
      {filterByCategory ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-3 mt-10">
          {filterByCategory?.map((item, index) => (
            <div key={index}>
              <ProductItem product={item} />{" "}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5 mt-10">
          <SkeltomProjectList />
          <SkeltomProjectList />
          <SkeltomProjectList />
        </div>
      )}
    </div>
  );
}

export default Category;
