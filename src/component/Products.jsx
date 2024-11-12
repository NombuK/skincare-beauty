import React, { useState, useEffect, useRef, useMemo } from "react";

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");
  const productItemsRef = useRef({});

  const productItems = [
    {
      category: "white",
      title: "FACE OIL",
      price: 15,
      imgSrc: "/images/white1.jpg",
    },
    {
      category: "white",
      title: "FACE CREAM",
      price: 25,
      imgSrc: "/images/white2.jpg",
    },
    {
      category: "white",
      title: "FACE SHRUB",
      price: 28,
      imgSrc: "/images/white3.jpg",
    },
    {
      category: "white",
      title: "FACE SPRAY",
      price: 30,
      imgSrc: "/images/white4.jpg",
    },
    {
      category: "white",
      title: "AFTER SUN SPRAY",
      price: 34,
      imgSrc: "/images/white5.jpg",
    },
    {
      category: "white",
      title: "SUN SCREEN",
      price: 18,
      imgSrc: "/images/white6.jpg",
    },
    {
      category: "white",
      title: "SPF MOISTURIZER",
      price: 20,
      imgSrc: "/images/white7.jpg",
    },
    {
      category: "white",
      title: "TONER",
      price: 18,
      imgSrc: "/images/white8.jpg",
    },
    {
      category: "white",
      title: "RETINOL CREAM",
      price: 22,
      imgSrc: "/images/white9.jpg",
    },
    {
      category: "white",
      title: "EYE GEL",
      price: 20,
      imgSrc: "/images/white11.jpg",
    },
    {
      category: "white",
      title: "FACE SOAP",
      price: 10,
      imgSrc: "/images/white12.jpg",
    },
    {
      category: "white",
      title: "EXFOLIATING SCRUB",
      price: 15,
      imgSrc: "/images/white10.jpg",
    },
    {
      category: "white",
      title: "FACE SINGLE OIL",
      price: 40,
      imgSrc: "/images/white13.jpg",
    },
    {
      category: "black",
      title: "FACE TONER",
      price: 18,
      imgSrc: "/images/black1.jpg",
    },
    {
      category: "black",
      title: "NIGHT CREAM",
      price: 38,
      imgSrc: "/images/black2.jpg",
    },
    {
      category: "black",
      title: "NIGHT SCRUB",
      price: 42,
      imgSrc: "/images/black3.jpg",
    },
    {
      category: "black",
      title: "CHARCOAL SOAP",
      price: 15,
      imgSrc: "/images/black4.jpg",
    },
    {
      category: "black",
      title: "FACE LOTION",
      price: 18,
      imgSrc: "/images/black5.jpg",
    },
    {
      category: "black",
      title: "PUFFINESS SPRAY",
      price: 22,
      imgSrc: "/images/black6.jpg",
    },
    {
      category: "black",
      title: "FACE BLACK OIL",
      price: 20,
      imgSrc: "/images/black7.jpg",
    },
    {
      category: "black",
      title: "FACE BUBBLE MASK",
      price: 40,
      imgSrc: "/images/black8.jpg",
    },
    {
      category: "black",
      title: "FACE CHARCOAL SCRUB",
      price: 32,
      imgSrc: "/images/black9.jpg",
    },
    {
      category: "combo",
      title: "COMBO SMALL WHITE",
      price: 88,
      imgSrc: "/images/combo1.jpg",
    },
    {
      category: "combo",
      title: "COMBO MEDUIM WHITE",
      price: 102,
      imgSrc: "/images/combo2.jpg",
    },
    {
      category: "combo",
      title: "COMBO MEDIUM + 1 WHITE",
      price: 110,
      imgSrc: "/images/combo3.jpg",
    },
    {
      category: "combo",
      title: "COMBO GOLD",
      price: 120,
      imgSrc: "/images/combo4.jpg",
    },
    {
      category: "combo",
      title: "COMBO MIX LARGE",
      price: 140,
      imgSrc: "/images/combo5.jpg",
    },
    {
      category: "combo",
      title: "COMBO MIX SMALL",
      price: 130,
      imgSrc: "/images/combo6.jpg",
    },
    {
      category: "combo",
      title: "COMBO MIX X-SMALL",
      price: 115,
      imgSrc: "/images/combo7.jpg",
    },
    {
      category: "combo",
      title: "COMBO MIX MEDIUM",
      price: 135,
      imgSrc: "/images/combo8.jpg",
    },
    {
      category: "combo",
      title: "COMBO SMALL BLACK",
      price: 132,
      imgSrc: "/images/combo9.jpg",
    },
    {
      category: "combo",
      title: "COMBO MEDIUM BLACK",
      price: 142,
      imgSrc: "/images/combo10.jpg",
    },
    {
      category: "combo",
      title: "COMBO LARGE BLACK",
      price: 152,
      imgSrc: "/images/combo11.jpg",
    },
  ];

  const filteredItems = useMemo(() => {
    return activeTab === "all"
      ? productItems
      : productItems.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const newObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (observer.current) {
      observer.current.disconnect();
    }

    Object.values(productItemsRef.current).forEach((item) => {
      if (item && item instanceof Element) {
        newObserver.observe(item);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [activeTab]);

  const tabLabels = {
    all: "All Products",
    white: "White Products",
    black: "Black Products",
    combo: "Combo Products",
  };

  return (
    <div id="products" className="py-6 bg-lightBrown dark:bg-black text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-nova text-darkerBrown dark:text-gold">
            Best Selling Products
          </h2>
          <div className="border-t-2 border-brown w-12 mx-auto mb-8"></div>
          <p className="text-lg mb-8 text-darkBrown dark:text-darkerGold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            doloribus eaque nisi debitis! Neque in debitis error nobis sequi
            cupiditate impedit facere repellendus, nam explicabo odit numquam
            praesentium sapiente soluta.
          </p>

          <div className=" mb-10">
            <ul className="flex justify-center gap-4">
              {["all", "white", "black", "combo"].map((tab) => (
                <li
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer px-6 py-2 rounded-full ${
                    activeTab === tab
                      ? "bg-brown text-darkBrown dark:bg-gold dark:text-black dark:font-bold"
                      : "bg-gray-200 text-gray-700 dark:font-bold"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="product__items">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {filteredItems.map((item) => (
              <li
                key={item.title}
                ref={(el) => (productItemsRef.current[item.title] = el)}
                className="item-wrap product-item"
              >
                <div className="h-56 grid place-items-center bg-brown rounded-3xl hover:bg-darkerBrown hover:shadow-gold dark:glowingGold sm:p-5 transition duration-200 ease-in-out">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-40 rounded-full hover:scale-110 transition duration-200"
                  />
                </div>

                <div className="pt-5 text-center">
                  <div className="mb-2">
                    <h4 className="font-semibold text-lg text-black dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">Product Use</p>
                  </div>

                  <p className="text-brown text-lg dark:text-darkerGold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
