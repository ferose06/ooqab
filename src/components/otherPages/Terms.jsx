import { useEffect, useState } from "react";

const sectionIds = [
  "terms",
  "limitations",
  "revisions-and-errata",
  "site-terms",
  "risks",
  "intellectual_property",
  "customer_responsibilities",
  "limitation_liability",
  "governing_law",
  "contact_us"
];
const sections = [
  { id: 1, text: "Use of Our Website", scroll: "terms" },
  { id: 2, text: "Products", scroll: "Products" },
  {
    id: 3,
    text: "Orders and Payments",
    scroll: "revisions-and-errata",
  },
  {
    id: 4,
    text: "Shipping & Delivery",
    scroll: "site-terms",
  },
  { id: 5, text: "Returns & Refunds", scroll: "risks" },
  {
    id: 6,
    text: "Intellectual Property",
    scroll: "intellectual_property",
  },
  {
    id: 7,
    text: "Customer Responsibilities",
    scroll: "customer_responsibilities",
  },
  {
    id: 8,
    text: "Limitation of Liability",
    scroll: "limitation_liability",
  },
  {
    id: 9,
    text: "Governing Law",
    scroll: "governing_law",
  },
  {
    id: 10,
    text: "Contact Us",
    scroll: "contact_us",
  }
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="terms-of-use-wrap">
          <div className="left sticky-top">
            {sections.map(({ id, text, scroll, isActive }) => (
              <h6
                key={id}
                onClick={() => handleClick(scroll)}
                className={`btn-scroll-target ${
                  activeSection == scroll ? "active" : ""
                }`}
              >
                {id}. {text}
              </h6>
            ))}
          </div>
          <div className="right">
            <h4 className="heading">Terms of use</h4>
            <h6 className="sub-heading">
              Welcome to Oqaab Fashions. These Terms and Conditions govern all purchases, browsing, and interactions made through our website or store concerning T-shirt sales under the Oqaab brand. By accessing our site or making a purchase, you agree to abide by these Terms.
            </h6><br/>
            <div className="terms-of-use-item item-scroll-target" id="terms">
              <h5 className="terms-of-use-title">1. Use of Our Website</h5>
              <div className="terms-of-use-content">
                <p>
                  <p>You agree to use our website only for lawful purposes. You may not use it:</p>
                  <ul>
                    <li>To make fake or fraudulent purchases</li>
                    <li>To interfere with the functionality of the website</li>
                    <li>To post or distribute harmful, illegal, or inappropriate content</li>
                  </ul>
                </p>
              </div>
            </div>
            <div
              className="terms-of-use-item item-scroll-target"
              id="Products"
            >
              <h5 className="terms-of-use-title">2. Products</h5>
              <div className="terms-of-use-content">
                <p>
                  <ul>
                  <li>We offer printed T-shirts for both retail and wholesale.</li>
                  <li>Product images may slightly differ from the actual items due to lighting, photography, or screen differences.</li>
                  <li>Sizes and fit information are provided as a guide. Please check before placing an order.</li>
                </ul>

                </p>
              </div>
            </div>
            <div
              className="terms-of-use-item item-scroll-target"
              id="revisions-and-errata"
            >
              <h5 className="terms-of-use-title">3. Orders and Payments</h5>
              <div className="terms-of-use-content">
                <p>
                  <ul>
                    <li>All prices are in <strong>[AED]</strong>.</li>
                    <li>Orders are confirmed only after full payment is received.</li>
                    <li>We accept online payments through secure third-party platforms. Cash-on-delivery may be available for specific regions (if applicable).</li>
                    <li>Oqaab reserves the right to cancel any suspicious or incomplete orders.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div
              className="terms-of-use-item item-scroll-target"
              id="site-terms"
            >
              <h5 className="terms-of-use-title">
                4. Shipping & Delivery
              </h5>
              <div className="terms-of-use-content">
                <p>
                 <ul>
                  <li>Delivery time depends on your location and the nature of the order (custom or ready stock).</li>
                  <li>We aim to dispatch all orders promptly. However, we are not liable for delays caused by couriers or external factors.</li>
                  <li>Delivery charges (if applicable) will be added at checkout.</li>
                </ul>
                </p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="risks">
              <h5 className="terms-of-use-title">5. Returns & Refunds</h5>
              <div className="terms-of-use-content">
                <p>
                  <ul>
                    <li>We accept returns only if:
                      <ul>
                        <li>The product is defective</li>
                        <li>You received the wrong item</li>
                        <li>Custom or personalized T-shirts cannot be returned unless there is a mistake from our end.</li>
                      </ul>
                    </li>
                    <li>To request a return, please contact us within <strong>14</strong> days of receiving your order.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="intellectual_property">
              <h5 className="terms-of-use-title">6. Intellectual Property</h5>
              <div className="terms-of-use-content">
                <p>All T-shirt designs, logos, and content on our site belong to Oqaab Fashions. You may not copy, reuse, or distribute our designs without written permission.</p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="customer_responsibilities">
              <h5 className="terms-of-use-title">7. Customer Responsibilities</h5>
              <div className="terms-of-use-content">
                <ul>
                  <li>Confirm that all information provided is accurate</li>
                  <li>Agree to be responsible for reviewing product descriptions and size charts</li>
                </ul>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="limitation_liability">
              <h5 className="terms-of-use-title">8. Limitation of Liability</h5>
              <div className="terms-of-use-content">
                <ul>
                  <li>Losses due to misuse of products</li>
                  <li>Delays caused by third-party delivery partners</li>
                  <li>Any indirect or incidental damages related to your order</li>
                </ul>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="governing_law">
              <h5 className="terms-of-use-title">9. Governing Law</h5>
              <div className="terms-of-use-content">
                <p>
                  These Terms shall be governed by the laws of the United Arab Emirates.
                  Any disputes shall be resolved in UAE courts.
                </p>
              </div>
            </div>

            <div className="terms-of-use-item item-scroll-target" id="contact_us">
              <h5 className="terms-of-use-title">10. Contact Us</h5>
              <div className="terms-of-use-content">
                <p>
                  For any questions, concerns, or returns, contact us at:
                </p>
                <p>
                  <strong>Oqaab Fashions</strong><br />
                  Email: <strong>info@oqaabfashions.com</strong><br />
                  Phone: <strong>+971 45521781</strong><br />
                  Location: <strong>SHOP NO 15,
                                    MUSALLA BUILDING,
                                    AL SUQ AL KABEER,
                                    BUR DUBAI</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
