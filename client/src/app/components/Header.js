"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../_context/CartContext";
import Cart from "./Cart";
import GlobalApi from "./_utils/GlobalApi";
import { usePathname } from "next/navigation";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useUser();
  const [openCart, setOpenCart] = useState(false);

  const [isLogin, setIsLogin] = useState();

  const { cart, setCart } = useContext(CartContext);
  const patch = usePathname();

  console.log(patch, "patch");
  const getUserCartItem_ = () => {
    GlobalApi.getUserCartItem(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        const result = res;
        console.log(result, "result");
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

  useEffect(() => {
    setIsLogin(window.location.href.toString().includes("sign-in"));
  }, []);

  useEffect(() => {
    user && getUserCartItem_();
  }, [user]);

  return (
    !isLogin && (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between   p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              priority={false}
              src="/logo.svg"
              width={200}
              height={200}
              alt="Flowbite Logo"
              className="w-auto h-auto"
            />
          </Link>

          {!user ? (
            <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
              {patch === "/sign-in" ? (
                <div></div>
              ) : (
                <Link
                  href="/sign-in"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Login
                </Link>
              )}
              <button
                data-collapse-toggle="mega-menu"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
              <div className=" flex items-center gap-5">
                <h2
                  className="flex gap-1 cursor-pointer"
                  onClick={() => setOpenCart(!openCart)}
                >
                  <ShoppingCart /> ({cart?.length})
                </h2>
                <UserButton afterSignOutUrl="/" />
              </div>
              {openCart && <Cart />}
            </div>
          )}
          <div
            id="mega-menu"
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isDropdownOpen ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/aboutUs"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  );
}

export default Header;
