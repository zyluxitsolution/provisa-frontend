"use client";
import Image from "next/image";
import React, { useState } from "react";
import { EyeIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function SingleProductCard({ product }: any) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(product);

  return (
    <>
      {product && (
        <div className="border border-primary-500 border-opacity-10 hover:border-opacity-30 duration-300 rounded-xl p-2 text-secondary-900 space-y-1 cursor-pointer  ">
          <Link href={`/product/${product.id}`}>
            <div className=" ">
              <Image
                src={isHovered ? product.image1 || product.media1 : product.image2 || product.thumbnail}
                alt="img"
                className={`productImage rounded-xl object-cover h-80 `}
                layout="responsive"
                width={300}
                height={300}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </Link>

          <p className="text-secondary-500 text-sm tracking-wide">
            {product.category?.name} | {product.brand?.name}
          </p>

          <p className=" font-medium tracking-wide">{product.name}</p>
          <div className="flex items-center justify-between">
            <p>
              <span className="font-medium text-lg text-secondary-900">Rs.{product.price}</span> <span className="line-through text-sm  bg-opacity-90">Rs.{product.previousPrice}</span>
            </p>

            <div className="flex space-x-2">
              <Link
                href={"/cart"}
                className="rounded-full border border-secondary-300 bg-primary-400 p-2 text-white cursor-pointer hover:bg-primary-400 hover:text-secondary-50 hover:-translate-y-1 duration-300">
                <ShoppingCart size={18} />
              </Link>

              <Link
                href={`/product/${product.id}`}
                className="rounded-full border border-secondary-300 bg-primary-400 p-2 text-white cursor-pointer hover:bg-primary-400 hover:text-secondary-50 hover:-translate-y-1 duration-300">
                <EyeIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
