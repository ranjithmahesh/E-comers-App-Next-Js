"use client";

import ProductItem from "./ProductItem";

function ProductList({ latestProduct }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-3 ">
      {latestProduct &&
        latestProduct?.map(
          (item, index) =>
            index <= 3 && (
              <div key={index}>
                <ProductItem product={item} />
              </div>
            )
        )}
    </div>
  );
}

export default ProductList;
