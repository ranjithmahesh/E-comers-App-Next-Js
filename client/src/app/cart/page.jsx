"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../_context/CartContext";
import GlobalApi from "../components/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Breadcrum from "../components/Breadcrum";
import { usePathname } from "next/navigation";
import SkeletonCartList from "./_components/SkeletonCartList";
import Image from "next/image";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const getSubTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total += Number(element.product.attributes.pricing);
    });

    return total;
  };
  const subTotal = getSubTotal();
  const gst = subTotal * 0.18;
  const GrandTotal = subTotal + subTotal * 0.18 - 200;
  const path = usePathname();
  const detelCartItem_ = (id) => {
    GlobalApi.deletCartItem(id).then(
      (res) => {
        console.log(res);
        if (res) {
          getUserCartItem_();
        }
      },
      (error) => {
        console.log(error);
      }
    );
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

  const handleClearCart = () => {
    cart.forEach((item) => detelCartItem_(item.id));
  };
  return (
    <div className="p-5 py-13 px-20 md:px-26">
      <Breadcrum path={path} />

      {cart ? (
        <>
          {cart.length <= 0 ? (
            <div className="flex justify-center items-center flex-col mt-[150px] overflow-y-hidden ">
              <h1 className="text-[75px] text-gray-500">Cart is Empty.</h1>

              <Link
                href="/"
                className="font-bold rounded bg-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-blue-600"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <section>
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
                <div className="mx-auto max-w-3xl">
                  <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      Your Cart
                    </h1>
                    <button
                      className="mt-5 rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      onClick={handleClearCart}
                    >
                      Clear Cart
                    </button>
                  </header>

                  <div className="mt-8">
                    <ul className="space-y-4">
                      {cart.map((item, i) => (
                        <li className="flex items-center gap-4" key={i}>
                          <Image
                            src={
                              item?.product?.attributes?.image?.data[0]
                                ?.attributes?.url
                            }
                            alt={item?.attributes?.title}
                            className="size-16 rounded object-cover"
                            layout="fill"
                          />

                          <div>
                            <h3 className="text-sm text-gray-900">
                              {" "}
                              {item?.product?.attributes?.title}
                            </h3>

                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                              <div className="line-clamp-1 w-[300px]">
                                <dt className="inline">Description:</dt>
                                <dd className="inline ">
                                  {item?.product?.attributes?.description}
                                </dd>
                              </div>
                            </dl>
                          </div>

                          <div className="flex flex-1 items-center justify-end gap-2">
                            <div>
                              <dt className="inline">
                                &#8377;
                                {""}
                                {item?.product?.attributes?.pricing}
                              </dt>
                            </div>
                            <button
                              className="text-gray-600 transition hover:text-red-600"
                              onClick={() => {
                                detelCartItem_(item.id);
                              }}
                            >
                              <span className="sr-only">Remove item</span>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                      <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                          <div className="flex justify-between">
                            <dt>Subtotal</dt>
                            <dd> &#8377;{subTotal}</dd>
                          </div>

                          <div className="flex justify-between">
                            <dt>GST</dt>
                            <dd> &#8377;{gst} </dd>
                          </div>

                          <div className="flex justify-between">
                            <dt>Discount</dt>
                            <dd>- &#8377;200</dd>
                          </div>

                          <div className="flex justify-between !text-base font-medium">
                            <dt>Total</dt>
                            <dd> &#8377;{GrandTotal}</dd>
                          </div>
                        </dl>

                        <div className="flex justify-end">
                          <a
                            href="/"
                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <SkeletonCartList />
      )}
    </div>
  );
}

export default Cart;
