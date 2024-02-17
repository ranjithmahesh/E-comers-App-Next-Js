"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import GlobalApi from "./_utils/GlobalApi";
import SkeltomProjectList from "./Skeletion/SkeltomProjectList";


function ProductSection() {
  const [latestProduct, setLatestProduct] = useState("");

  useEffect(() => {
    const getLatestProduct_ = async () => {
      try {
        const res = await GlobalApi.getLatestProduct();
    
        setLatestProduct(res.data);
      } catch (error) {
        console.error("Error fetching latest product:", error);
      }
    };
    getLatestProduct_();
  }, []);

  const fetchElectronics = (title) => {
    const result =
      Array.isArray(latestProduct) &&
      latestProduct?.filter(
        (item) => item.attributes.category.data?.attributes.title == title
      );

    return result;
  };
  const filteredElectronics = fetchElectronics("electronics");
  const filteredClothesForMen = fetchElectronics("men's clothing");
  const filteredClothesForwomen = fetchElectronics("women's clothing");

  return (
    <div className="md:px-20  px-10 ">
      <div className="mb-[50px]">
        <div className=" flex  flex-row items-center justify-between">
          <h2 className="font-bold text-[20px] my-3  ">Brand New </h2>

          <Link
            className="text-primary hover:underline cursor-pointer hover:scale-95 hover:text-blue-500 flex items-center gap-1"
            href={"/category/" + "all"}
          >
            All Product <ArrowRight size="20" />
          </Link>
        </div>
        {latestProduct ? (
          <ProductList latestProduct={latestProduct} />
        ) : (
          <SkeltomProjectList />
        )}
      </div>
      <div className="mb-[50px]">
        <div className=" flex  flex-row items-center justify-between">
          <h2 className="font-bold text-[20px] my-3  ">Latest Electronics </h2>

          <Link
            className="text-primary hover:underline cursor-pointer hover:scale-95 hover:text-blue-500 flex items-center gap-1"
            href={"/category/" + "electronics"}
          >
            All Product <ArrowRight size="20" />
          </Link>
        </div>

        {latestProduct ? (
          <ProductList latestProduct={filteredElectronics} />
        ) : (
          <SkeltomProjectList />
        )}
      </div>
      <div className="mb-[50px]">
        <div className=" flex  flex-row items-center justify-between">
          <h2 className="font-bold text-[20px] my-3">
            Latest Fashion Tends For Women&apos;s
          </h2>

          <Link
            className="text-primary hover:underline cursor-pointer hover:scale-95 hover:text-blue-500 flex items-center gap-1"
            href={"/category/" + "women's clothing"}
          >
            All Product <ArrowRight size="20" />
          </Link>
        </div>

        {latestProduct ? (
          <ProductList latestProduct={filteredClothesForwomen} />
        ) : (
          <SkeltomProjectList />
        )}
      </div>
      <div className="mb-[50px]">
        <div className=" flex  flex-row items-center justify-between">
          <h2 className="font-bold text-[20px] my-3  ">
            Latest Fashion Tends for Men
          </h2>

          <Link
            className="text-primary hover:underline cursor-pointer hover:scale-95 hover:text-blue-500 flex items-center gap-1"
            href={"/category/" + "men's clothing"}
          >
            All Product <ArrowRight size="20" />
          </Link>
        </div>

        {latestProduct ? (
          <ProductList latestProduct={filteredClothesForMen} />
        ) : (
          <SkeltomProjectList />
        )}
      </div>
    </div>
  );
}

export default ProductSection;
