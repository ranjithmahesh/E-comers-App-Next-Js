"use client";

import GlobalApi from "../../components/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrum from "../../components/Breadcrum";
import ProjectBanner from "./_components/ProjectBanner";
import ProjectInfo from "./_components/ProjectInfo";
import axios from "axios";
import ProductList from "../../components/ProductList";

function ProjectDetail({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState(null);
  const [similarProduct, setSimilarProduct] = useState([]);

  useEffect(() => {
    const getProductById_ = async () => {
      try {
        const res = await GlobalApi.getProductById(params?.projectid);
        setProductDetails(res.data);

        if (res.data?.attributes?.category?.data?.attributes?.title) {
          tryClaa(res.data.attributes.category.data.attributes.title);
        }
      } catch (error) {
        console.error("Error fetching product by ID:", error);
      }
    };

    getProductById_();
  }, [params?.projectid]);

  // productDetails?.attributes?.category?.data?.attributes?.title
  const tryClaa = async (decodedCategory) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_Base_URL}/products?filters[category][title][$eq]=${decodedCategory}&populate=*`
      );

      setSimilarProduct(res.data.data);
    } catch (error) {
      console.log("Error in cat", error);
    }
  };

  return (
    <div className="p-5 py-13 px-20 md:px-26">
      <Breadcrum path={path} />

      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-5 sm:gap-5 justify-evenly px-10">
        <ProjectBanner productDetails={productDetails} />
        <ProjectInfo productDetails={productDetails} />
      </div>

      <div className="my-7">
        <h2 className="font-medium text-[20px] mb-4">Similar Product</h2>

        <ProductList latestProduct={similarProduct} />
      </div>
    </div>
  );
}

export default ProjectDetail;
