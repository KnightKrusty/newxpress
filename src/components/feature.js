import React from "react";

export default function Feature() {
  return (
    <div className="mt-24 container mx-auto px-4">
      <div className="mb-16 mx-auto text-center">
        <span className="text-xs font-light text-gray-500 uppercase">
          Discover what sets xpressfirst apart
        </span>
        <h2 className="mt-2 text-5xl text-center text-gray-900 md:text-7xl">
          Why choose us
        </h2>
        <p className="mt-6 leading-5 text-base text-gray-500 text-cente md:text-lg lg:max-w-3xl mx-auto">
          For over 8 years, we offer businesses premium and moderate cloud-based
          business arrangements conveyed close by the most noteworthy gauges in
          benefit. We have built our reputation on these factors which are, our
          intelligent approach to your bussiness needs, amazing support on that
          our customers can rely on and customer satifsfaction.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4 mt-20">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div className="p-8 bg-white shadow rounded text-center">
            <h4 className="mb-6 text-2xl font-heading text-gray-900 ">
              Intelligent approach
            </h4>
            <img className="mx-auto" src={"/Intelligentapproach.svg"} />

            <p className="my-6 text-gray-600 text-center">
              We offer a range of managed and professional cutting edge services
              which focuses on matching your bussinesses requirements to give
              you a complete hassel free solution.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
          <div className="p-8 shadow rounded text-center">
            <h4 className="mb-6 text-2xl text-gray-900 ">Amazing support</h4>
            <img className="mx-auto" src={"/amazingsupport.svg"} />

            <p className="my-6 text-gray-500 text-center">
              Our main goal is provide services that you will love, Our support
              team ensures that you are completely satisfied and we are always
              looking to solve your queries as earliest as possible.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 lg:mb-0">
          <div className="p-8 bg-white shadow rounded text-center">
            <h4 className="mb-6 text-2xl  font-heading text-gray-900 ">
              Customer Satisfaction
            </h4>
            <img className="mx-auto" src={"/custionsatisfaction.svg"} />

            <p className="my-6 text-gray-600 text-center">
              Customer satisfaction is our highest priority, that what makes us
              happy. We do everything, from manual checks to monitoring support
              interaction to make sure that you will have good expirience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
