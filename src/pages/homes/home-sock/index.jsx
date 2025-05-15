import Features from "@/components/common/Features";
import MarqueeSection2 from "@/components/common/MarqueeSection2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Collections from "@/components/homes/sock/Collections";
import Collections2 from "@/components/homes/sock/Collections2";
import Hero from "@/components/homes/sock/Hero";
import Products1 from "@/components/homes/sock/Products1";
import Products2 from "@/components/homes/sock/Products2";
import ShopGram from "@/components/homes/sock/ShopGram";
import Testimonials from "@/components/homes/sock/Testimonials";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Sock || OOQAB - Premium JDM & Racing T-Shirts | Titans, Bikes & Car Tees Online",
  description : "Shop high-quality graphic T-shirts inspired by JDM culture, superbikes, street racing, muscle cars, and titan warriors. Bold designs. Premium fabric. Fast shipping.",
  keywords : "JDM T-shirts, racing T-shirts, bike T-shirts, car graphic tees, titan T-shirts, streetwear, motorsport fashion, tuner car apparel, anime titans shirts, performance car clothing, biker lifestyle tees"
};

export default function HomeSockPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Hero />
      <MarqueeSection2 />
      <Products1 />
      <Collections />
      <Products2 parentClass="flat-spacing pt-5" />
      <Collections2 />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-container" />
      <ShopGram />
      <Footer1 border={false} />
    </>
  );
}
