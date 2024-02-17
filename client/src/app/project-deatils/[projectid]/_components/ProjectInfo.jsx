import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";

import { useRouter } from "next/navigation";
import GlobalApi from "../../../components/_utils/GlobalApi";
import SkeltonProjectinfo from "./skeltonProjectinfo";
import { useUser } from "@clerk/nextjs";
import { CartContext } from "../../../_context/CartContext";
import { useContext } from "react";

function ProjectInfo({ productDetails }) {
  const { user } = useUser();

  const router = useRouter();

  const { cart, setCart } = useContext(CartContext);

  const onAddToCart = () => {
    if (!user) {
      console.error("User is not logged in");
      return;
    }

    const data = {
      data: {
        userName: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        products: productDetails.id,
      },
    };

    const getUserCartItem_ = () => {
      GlobalApi.getUserCartItem(user.primaryEmailAddress.emailAddress)
        .then((res) => {
          const result = res;

          setCart([]);

          result &&
            result.forEach((prod) => {
              setCart((cart) => [
                ...cart,
                {
                  id: prod.id,
                  product: prod.attributes.products.data[0],
                },
              ]);
            });
        })
        .catch((error) => {
          console.error("Error fetching user cart items:", error);
        });
    };

    GlobalApi.AddToCart(data)
      .then((res) => {
        console.log("Add to cart", res);
        if (res) {
          getUserCartItem_();
        }
      })
      .catch((error) => {
        console.error("Error adding to cart", error);
      });
  };

  return (
    <div>
      {productDetails ? (
        <div>
          <h1 className="text-[20px] ">{productDetails?.attributes?.title}</h1>
          <h2 className="text-[12px] text-gray-400 ">
            {" "}
            {productDetails.attributes?.category?.data?.attributes?.title}
          </h2>
          <h2 className="text-[12px] text-gray-700 mt-5">
            {" "}
            {productDetails.attributes?.description}
          </h2>

          <h2 className="flex flex-row gap-3 mt-5 text-gray-500 text-[13px] items-center ">
            {productDetails ? (
              <BadgeCheck className="text-green-500" />
            ) : (
              <AlertOctagon className="text-yellow-400 h-5 w-5" />
            )}
            Eligible for Instatent Delivery
          </h2>
          <h2 className="text-[35px] text-primary font-medium mt-5">
            &#8377;{productDetails.attributes.pricing}
          </h2>

          <button
            className="flex flex-row gap-2 bg-primary text-white rounded-lg p-3 px-10 mt-5 hover:bg-blue-700"
            onClick={() => onAddToCart()}
          >
            {" "}
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
      ) : (
        <SkeltonProjectinfo />
      )}
    </div>
  );
}
export default ProjectInfo;
