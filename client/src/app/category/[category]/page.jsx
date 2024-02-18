"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Breadcrum from "../../components/Breadcrum";
import ProductItem from "../../components/ProductItem";
import SkeltomProjectList from "../../components/Skeletion/SkeltomProjectList";
import GlobalApi from "../../components/_utils/GlobalApi";

function Category({ params: { category } }) {
  const decodedCategory = decodeURI(category);
  const path = usePathname();
  const decodedPath = decodeURI(path);
  const [filterByCategory, setFilterByCategory] = useState([]);

  const getLatestProduct_ = async () => {
    try {
      const res = await GlobalApi.getLatestProduct();

      setFilterByCategory(res.data);
    } catch (error) {
      console.error("Error fetching latest product:", error);
    }
  };

  const tryClaa = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_Base_URL}/products?filters[category][title][$eq]=${decodedCategory}&populate=*`
      );

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
  }, [category]);

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
