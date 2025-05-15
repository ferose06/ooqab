import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useContextElement } from "@/context/Context";
import { products } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "../productCards/ProductCard1";
import {
  blogLinks,
  demoItems,
  otherPageLinks,
  otherShopMenus,
  productFeatures,
  productLinks,
  productStyles,
  shopFeatures,
  shopLayout,
  swatchLinks,
} from "@/data/menu";

export default function Nav() {
  const { collectionItems } = useContextElement();
  console.log(collectionItems, "collectionItems");
  const sortedItems = [...collectionItems].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const { pathname } = useLocation(); 
  return (
    
    <>
      {" "}
      <li
        className={`menu-item ${
          [...demoItems].includes(
            (elm) => elm.href.split("/")[1] == ""
          )
            ? "active"
            : ""
        } `}
      >
        <a href="/" className="item-link">
          Home
        </a>
      </li>
      <li className={`menu-item ${[...demoItems].includes(
        (elm) => elm.href.split("/")[1] === pathname.split("/")[1]
      )
          ? "active"
          : ""
        } `}>
        <a href="/all-collections" className="item-link">
          Explore All Collections
        </a>
      </li>
      {sortedItems.map((item, i) => (
        <li
          key={i}
          className={`menu-item ${
            sortedItems.some(
              (elm) => elm.name.split("/")[1] === pathname.split("/")[1]
            )
              ? "active"
              : ""
          } `}
        >
          <a href={`/shop-by-collections/${encodeURIComponent(item.name)}`} className="item-link">
            {item.name}
          </a>
        </li>
      ))}
      
    
    </>
  );
}
