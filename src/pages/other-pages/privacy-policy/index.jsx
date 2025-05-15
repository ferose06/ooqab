import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import PrivacyPolicy from "@/components/otherPages/Policy";
import React from "react";
import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Privacy Policy || OOQAB - Premium JDM & Racing T-Shirts | Titans, Bikes & Car Tees Online",
  description: "Learn how we protect your personal information. OOQAB's privacy policy explains our data collection, usage, and protection practices for your security.",
  keywords: "JDM apparel privacy, online shopping data protection, T-shirt store privacy policy, personal information security, data collection policy, e-commerce privacy"
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Privacy Policy</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" to={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicy />
      <Footer1 />
    </>
  );
}