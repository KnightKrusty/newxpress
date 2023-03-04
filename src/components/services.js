import React from "react";

export default function Services() {
  return (
    <div className=" flex flex-wrap justify-center items-center mx-auto px-4 mt-10  overflow-hidden">
      <div className="overflow-hidden  w-full md:w-full lg:w-2/3 xl:w-2/3">
        <div className="text-center sm:mb-10">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Services we offer
          </h1>
          <p className="mt-3  text-base text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg ">
            Xpress First trading company is focused on offering our clients a
            range of premium services, From moderate cloud-based bussiness
            arrangements to industrial chemicals, interior designing and luxury
            cars.
          </p>
        </div>
      </div>

      <div className="overflow-hidden w-full  lg:w-1/3 xl:w-1/3">
        <div className="box mx-auto p-10 ">
          <div className="mb-0 sm:mb-20">
            <img className="mx-auto h-36" src={"/car.svg"} />
            <p className="text-center text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              Luxury Car Reselling
            </p>
          </div>
        </div>
      </div>

      <div className="  overflow-hidden  w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
        <div className="flex items-center  flex-col box color-box md:inner-shadow mx-auto p-12">
          <img className="h-36" src={"/Interior_design.svg"} />
          <p className="text-center text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Interior Design
          </p>
        </div>
      </div>

      <div className="overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
        <div className="box mx-auto p-12">
          <img className="mx-auto h-36" src={"/chemical_jar.svg"} />
          <p className="text-center text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Chemical Distribution
          </p>
        </div>
      </div>

      <div className="overflow-hidden w-full md:w-full lg:w-1/3 xl:w-1/3">
        <div className="box md:inner-shadow color-box mx-auto p-12">
          <img className="mx-auto h-36" src={"/computer_networking.svg"} />
          <p className="text-center text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            IT Hardwate & Networking Solution
          </p>
        </div>
      </div>
    </div>
  );
}
