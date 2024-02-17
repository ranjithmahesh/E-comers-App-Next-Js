import Image from "next/image";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <Link href={"/project-deatils/" + product.id}>
      <div className=" hover:border  p-1 rounded-lg border-blue-300 overflow-hidden ">
        <div>
          <Image
            src={product.attributes.image.data[0].attributes.url}
            width={300}
            height={450}
            alt={product.attributes.title}
            className="rounded-t-lg  h-[190px] object-cover "
          />
        </div>
        <div className="flex flex-row items-center bg-gray-100 rounded-b-lg p-2">
          <div className=" ">
            <h2 className="line-clamp-1 -pt-[20px]">
              {product.attributes.title}
            </h2>
            <h2 className="p-2 line-clamp-2  text-[14px] font-medium ">
              {product.attributes?.description}
            </h2>
            {product?.attributes?.category?.data?.attributes?.title && (
              <h2 className="p-2 text-[12px] text-gray-400 flex gap-2">
                {/* <ChevronRightSquare className="h-4 w-4" /> */}

                {product?.attributes?.category?.data.attributes?.title}
              </h2>
            )}
          </div>
          <h2 className="font-bold mr-1">
            {" "}
            &#8377;{product.attributes.pricing}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
