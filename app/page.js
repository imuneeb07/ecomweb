"use client";
import React, { useState } from "react";
import Link from "next/link";

const Homepage = () => {
  const [currentInd, setCurrentInd] = useState(0);
  const [showText, setShowText] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentInd === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentInd - 1;
    setCurrentInd(newIndex);
    setShowText(false); // Hide text when changing slide
    setTimeout(() => {
      setShowText(true); // Show text after a delay
    }, 1000); // Adjust delay according to transition duration
  };

  const nextSlide = () => {
    const isLastSlide = currentInd === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentInd + 1;
    setCurrentInd(newIndex);
    setShowText(false); // Hide text when changing slide
    setTimeout(() => {
      setShowText(true); // Show text after a delay
    }, 1000); // Adjust delay according to transition duration
  };

  const slides = [
    {
      url: "https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp",
    },
    {
      url: "https://preview.colorlib.com/theme/malefashion/img/hero/hero-2.jpg.webp",
    },
  ];

  return (
    <>
      <div className="max-w-[1400px] h-[780px] w-full relative z-0">
        <div
          style={{ backgroundImage: `url(${slides[currentInd].url})` }}
          className="absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-1000"
        ></div>
        {showText && (
          <div className="absolute top-[28%] left-24  max-w-xl transition-all duration-300 z-10 animate-textup">
            <h6 className="text-md font-semibold text-red-700 border-blue-600 py-3">
              WINTER COLLECTION
            </h6>
            <h1 className="text-black font-bold text-5xl py-3">
              Fall - Winter{" "}
            </h1>
            <h1 className="text-black font-bold text-5xl">Collections 2024 </h1>
            <p className="mt-8">
              A specialist label creating luxury essentials. Ethically crafted
              with an unwavering commitment to exceptional quality.
            </p>

            <button className="px-6 mt-8 py-2 border bg-black text-white cursor-pointer">
              SHOP NOW
            </button>
          </div>
        )}

        {/* LEFTARROW */}
        <div className="z-10">
          <i
            onClick={prevSlide}
            className="bx bx-chevron-left  text-5xl absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 hover:bg-white transition-all duration-500  cursor-pointer"
          ></i>
        </div>

        {/* RIGHTARROW */}
        <div className="z-10">
          <i
            onClick={nextSlide}
            className="bx bx-chevron-right  text-5xl absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 rounded-full p-2 hover:bg-white transition-all duration-500 cursor-pointer"
          ></i>
        </div>

        <div className="z-10 cursor-pointer text-lg absolute bottom-6  left-[6%] ">
          <Link href="https://www.instagram.com">
            <i className="bx bxl-instagram px-4"></i>
          </Link>
          <Link href="https://www.facebook.com">
            <i className="bx bxl-facebook px-4"></i>
          </Link>
          <Link href="https://www.twitter.com">
            <i className="bx bxl-twitter px-4"></i>
          </Link>
          <Link href="https://www.pinterest.com">
            <i className="bx bxl-pinterest px-4"></i>
          </Link>
        </div>
      </div>
      <div className="border border-red-500 p-6  pt-[100px] relative group flex flex-col md:flex-row">
  <div className="  ">
  <img
    className="md:order-2 w-full    md:w-auto"
    src="https://preview.colorlib.com/theme/malefashion/img/banner/banner-1.jpg.webp"
    alt=""
  />
  <div className=" md:order-1  ">
    <h1 className="text-4xl font-bold py-2">Clothing Collections 2030</h1>
    <div>
      <span className="relative inline-block">
        SHOP NOW
        {/* Black line */}
        <span className="absolute top-6 left-0 group-hover:left-1/2 w-full h-[2px] bg-black transition-all duration-500 group-hover:w-0"></span>
        {/* Orange line */}
        <span className="absolute top-6 left-0 group-hover:block w-1/2 h-[2px] bg-orange-500 transition-all duration-500  hidden"></span>
      </span>
    </div>
  </div>
  </div>
</div>

    </>
  );
};

export default Homepage;
