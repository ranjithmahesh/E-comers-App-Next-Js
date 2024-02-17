import Image from "next/image";
import React from "react";

function ProjectBanner({ productDetails }) {
  return (
    <div className="w-full">
      {productDetails ? (
        <Image
          src={productDetails?.attributes?.image.data[0].attributes.url}
          width={450}
          height={450}
          alt={productDetails?.attributes?.title}
          className="rounded-lg object-cover  "
        />
      ) : (
        <div className="h-[350px] w-[350px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default ProjectBanner;
