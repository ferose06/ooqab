import React, { useEffect, useState } from "react";
import Slider1 from "../sliders/Slider1";
import ColorSelect from "../ColorSelect";
import SizeSelect from "../SizeSelect";
import QuantitySelect from "../QuantitySelect";
import { useContextElement } from "@/context/Context";
import ProductStikyBottom from "../ProductStikyBottom";
export default function Details1({ product }) {
  const [activeColor, setActiveColor] = useState("gray");
  const [activeSize, setActiveSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const {
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    isAddedtoCompareItem,
    addToCompareItem,
    cartProducts,
    updateQuantity,
  } = useContextElement();


  useEffect(() => {
    const colorOptions = product?.filterColor?.map((color) => ({
      id: `values-${color}`,
      value: color.charAt(0).toUpperCase() + color.slice(1),
      color: color.toLowerCase(),
    })) || [];

    setColor(colorOptions);
    setActiveColor(product?.filterColor?.[0] || "gray");
    const sizeOptions = product?.filterSizes?.map((size) => ({
      id: `values-${size.toLowerCase()}`,
      value: size,
      price: product?.price,
      disabled: false,
    }));
    setSize(sizeOptions);
    setActiveSize(product?.filterSizes?.[0] || "L");
    
  }, [product]);

  useEffect(() => {
    console.log('Changing size/color:', activeSize, activeColor);
    setQuantity(1);
    if (product?.stocks && activeSize && activeColor) {
      const matchedStock = product.stocks.find(
        (item) =>
          item.size === activeSize &&
          item.color.toLowerCase() === activeColor.toLowerCase()
      );

      setMaxQuantity(matchedStock ? matchedStock.stocks : 0);
    }
  }, [activeSize, activeColor, product]);


  return (
    product && (
      <section className="flat-spacing">
        <div className="tf-main-product section-image-zoom">
          <div className="container">
            <div className="row">
              {/* Product default */}
              <div className="col-md-6">
                <div className="tf-product-media-wrap sticky-top">
                  <Slider1
                    setActiveColor={setActiveColor}
                    activeColor={activeColor}
                    firstItem={product.imgSrc}
                    slideItems={product.allImages}
                  />
                </div>
              </div>
              {/* /Product default */}
              {/* tf-product-info-list */}
              <div className="col-md-6">
                <div className="tf-product-info-wrap position-relative mw-100p-hidden ">
                  <div className="tf-zoom-main" />
                  <div className="tf-product-info-list other-image-zoom">
                    <div className="tf-product-info-heading">
                      <div className="tf-product-info-name">
                        <div className="text text-btn-uppercase">Clothing</div>
                        <h3 className="name">{product.title}</h3>
                        <div className="sub">
                          {/* <div className="tf-product-info-rate">
                          <div className="list-star">
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                          </div>
                          <div className="text text-caption-1">
                            (134 reviews)
                          </div>
                        </div>
                        <div className="tf-product-info-sold">
                          <i className="icon icon-lightning" />
                          <div className="text text-caption-1">
                            18&nbsp;sold in last&nbsp;32&nbsp;hours
                          </div>
                        </div> */}
                        </div>
                      </div>
                      <div className="tf-product-info-desc">
                        <div className="tf-product-info-price">
                          <h5 className="price-on-sale font-2">
                            {" "}
                            AED {product.price?.toFixed(2)}
                          </h5>
                          {product.oldPrice ? (
                            <>
                              <div className="compare-at-price font-2">
                                {" "}
                                ${product.oldPrice?.toFixed(2)}
                              </div>
                              <div className="badges-on-sale text-btn-uppercase">
                                {(((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(0)}% OFF
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                        <p>
                          {product.description}
                        </p>
                        <div className="tf-product-info-liveview">
                          <i className="icon icon-eye" />
                          <p className="text-caption-1">
                            <span className="liveview-count">{Math.floor(Math.random() * 10) + 1}</span> people are
                            viewing this right now
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-info-choose-option">
                      <ColorSelect
                        setActiveColor={setActiveColor}
                        activeColor={activeColor}
                        colorOptions={color}
                      />
                      <SizeSelect sizes={size} 
                        setActiveSize={setActiveSize}
                        activeSize={activeSize}
                      />
                      <div className="tf-product-info-quantity">
                        <div className="title mb_12">Quantity: (Available Stock : {maxQuantity}) </div>
                        <QuantitySelect
                          maxQuantity={maxQuantity}
                          quantity={
                            isAddedToCartProducts(product.id)
                              ? cartProducts.filter(
                                (elm) => elm.id == product.id
                              )[0].quantity
                              : quantity
                          }
                          setQuantity={(qty) => {
                            if (isAddedToCartProducts(product.id)) {
                              updateQuantity(product.id, qty);
                            } else {
                              setQuantity(qty);
                            }
                          }}
                        /> 
                      </div>
                      <div>
                        <div className="tf-product-info-by-btn mb_10">
                          <a
                            onClick={() => addProductToCart(product.id, quantity, activeSize, activeColor)}
                            className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 btn-add-to-cart"
                          >
                            <span>
                              {isAddedToCartProducts(product.id)
                                ? "Already Added"
                                : "Add to cart - "} {" "}
                            </span>
                            <span className="tf-qty-price total-price">
                              AED {" "}
                              {isAddedToCartProducts(product.id)
                                ? (
                                  product.price *
                                  cartProducts.filter(
                                    (elm) => elm.id == product.id
                                  )[0].quantity
                                ).toFixed(2)
                                : (product.price * quantity).toFixed(2)}{" "}
                            </span>
                          </a>
                          {/* <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="compare"
                            onClick={() => addToCompareItem(product.id)}
                            className="box-icon hover-tooltip compare btn-icon-action"
                          >
                            <span className="icon icon-gitDiff" />
                            <span className="tooltip text-caption-2">
                              {isAddedtoCompareItem(product.id)
                                ? "Already compared"
                                : "Compare"}
                            </span>
                          </a> */}
                          <a
                            onClick={() => addToWishlist(product.id)}
                            className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip text-caption-2">
                              {isAddedtoWishlist(product.id)
                                ? "Already Wishlished"
                                : "Wishlist"}
                            </span>
                          </a>
                        </div>
                        {/* <a href="#" className="btn-style-3 text-btn-uppercase">
                          Buy it now
                        </a> */}
                      </div>
                      <div className="tf-product-info-help">
                        <div className="tf-product-info-extra-link">
                          <a
                            href="#delivery_return"
                            data-bs-toggle="modal"
                            className="tf-product-extra-icon"
                          >
                            <div className="icon">
                              <i className="icon-shipping" />
                            </div>
                            <p className="text-caption-1">
                              Delivery &amp; Return
                            </p>
                          </a>
                          <a
                            href="#ask_question"
                            data-bs-toggle="modal"
                            className="tf-product-extra-icon"
                          >
                            <div className="icon">
                              <i className="icon-question" />
                            </div>
                            <p className="text-caption-1">Ask A Question</p>
                          </a>
                          <a
                            href="#share_social"
                            data-bs-toggle="modal"
                            className="tf-product-extra-icon"
                          >
                            <div className="icon">
                              <i className="icon-share" />
                            </div>
                            <p className="text-caption-1">Share</p>
                          </a>
                        </div>
                        <div className="tf-product-info-time">
                          <div className="icon">
                            <i className="icon-timer" />
                          </div>
                          <p className="text-caption-1">
                            Estimated Delivery:&nbsp;&nbsp;<span>12-26 days</span>
                            (International), <span>3-6 days</span> (UAE)
                          </p>
                        </div>
                        <div className="tf-product-info-return">
                          <div className="icon">
                            <i className="icon-arrowClockwise" />
                          </div>
                          <p className="text-caption-1">
                            Return within <span>45 days</span> of purchase. Duties
                            &amp; taxes are non-refundable.
                          </p>
                        </div>
                        <div className="dropdown dropdown-store-location">
                          <div
                            className="dropdown-title dropdown-backdrop"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                          >
                            {/* <div className="tf-product-info-view link">
                            <div className="icon">
                              <i className="icon-map-pin" />
                            </div>
                            <span>View Store Information</span>
                          </div> */}
                          </div>
                          <div className="dropdown-menu dropdown-menu-end">
                            <div className="dropdown-content">
                              <div className="dropdown-content-heading">
                                <h5>Store Location</h5>
                                <i className="icon icon-close" />
                              </div>
                              <div className="line-bt" />
                              <div>
                                <h6>Fashion OOQAB</h6>
                                <p>Pickup available. Usually ready in 24 hours</p>
                              </div>
                              <div>
                                <p>766 Rosalinda Forges Suite 044,</p>
                                <p>Gracielahaven, Oregon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="tf-product-info-sku">
                        <li>
                          <p className="text-caption-1">SKU:</p>
                          <p className="text-caption-1 text-1">53453412</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Vendor:</p>
                          <p className="text-caption-1 text-1">OQAAB</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Available:</p>
                          <p className="text-caption-1 text-1">Instock</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Categories:</p>
                          <p className="text-caption-1">
                            {product.tabFilterOptions?.map((category, index) => (
                              <span key={index}>
                                <a href="#" className="text-1 link">
                                  {category}
                                </a>
                                {index < product.tabFilterOptions.length - 1 && ", "}
                              </span>
                            ))}

                          </p>
                        </li>
                      </ul>
                      <div className="tf-product-info-guranteed">
                        <div className="text-title">Guranteed safe checkout:</div>
                        <div className="tf-payment">
                          <a href="#">
                            <img
                              alt=""
                              src="/images/payment/img-1.png"
                              width={100}
                              height={64}
                            />
                          </a>
                          <a href="#">
                            <img
                              alt=""
                              src="/images/payment/img-2.png"
                              width={100}
                              height={64}
                            />
                          </a>
                          <a href="#">
                            <img
                              alt=""
                              src="/images/payment/img-3.png"
                              width={100}
                              height={64}
                            />
                          </a>
                          <a href="#">
                            <img
                              alt=""
                              src="/images/payment/img-4.png"
                              width={98}
                              height={64}
                            />
                          </a>
                          <a href="#">
                            <img
                              alt=""
                              src="/images/payment/img-5.png"
                              width={102}
                              height={64}
                            />
                          </a>
                          <a href="#">
                            <img
                              alt=""
                              src="/images/payment/img-6.png"
                              width={98}
                              height={64}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /tf-product-info-list */}
            </div>
          </div>
        </div>
        {/* <ProductStikyBottom /> */}
      </section>
    ) 
  );
}
