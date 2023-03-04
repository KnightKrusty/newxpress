import React from "react";

export default function Aboutheader() {
  return (
    <div className="flex flex-wrap overflow-hidden container mx-auto px-10 mt-20">
      <div className="w-full overflow-hidden  md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 className="leading-tight text-center md:text-left md:leading-normal z-10 md:my-20 xl:my-0 font-bold text-4xl sm:text-5xl  md:text-6xl lg:text-7xl ">
          We are <br /> XpressFirst
        </h1>
      </div>

      <div className="w-full overflow-hidden  md:w-1/2 lg:w-1/2 xl:w-1/2">
        <p className="text-gray-500 leading-loose  text-xl xl:text-2xl text-center md:text-justify">
          With our immense experience, a large number of glad clients and
          devoted group of specialists, we're pleased to be viewed as one of the
          leading IT, chemical distribution and inteiror designer. XpressFirst
          is number one business in Managed IT Provider for the best voice,
          data, and network products and solutions on the market.
        </p>
      </div>
    </div>
  );
}
