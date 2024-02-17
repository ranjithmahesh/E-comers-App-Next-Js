import { useContext, useEffect } from "react";
import { CartContext } from "../_context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    cart;
  }, [cart]);

  return (
    <div className="h-[300px] border shadow-sm w-[300px] bg-gray-100 rounded-md absolute mx-10 right-10 top-12 p-5 overflow-auto">
      {cart.length == 0 ? (
        <h1 className="text-xl  h-full text-gray-500 flex items-center justify-center">
          Cart is Empty
        </h1>
      ) : (
        <div className="mt-4 space-y-6 ">
          <ul className="space-y-4">
            {cart.map((item, i) => (
              <li className="flex items-center gap-4" key={i}>
                <img
                  src={
                    item?.product?.attributes?.image?.data[0]?.attributes?.url
                  }
                  alt={item?.attributes?.title}
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900 line-clamp-1">
                    {item?.product?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Price </dt>
                      <dd className="inline">
                        &#8377;{item?.product?.attributes?.pricing}
                      </dd>
                    </div>

                    <div className="line-clamp-1">
                      <dt className="inline">Description:</dt>
                      <dd className="inline ">
                        {item?.product?.attributes?.description}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-4 text-center">
            <a
              href="/cart"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              View my cart ({cart?.length})
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
