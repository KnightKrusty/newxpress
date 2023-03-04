import React from "react";

export default function Trust() {
  return (
    <div className="container px-10 mx-auto mt-14 md:mt-36">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
          <div className="max-w-md text-center mx-auto md:text-left md:mx-0 lg:p-10 ">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold font-heading">
              We're Trustworthy.
            </h2>
            <p className="mb-6 leading-loose text-blueGray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
            <ul>
              <li className="py-4">
                <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-purple-50 text-purple-600 rounded">
                  1
                </span>
                <span>Proin volutpat ex eu in cursus</span>
              </li>
              <li className="py-4">
                <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-purple-50 text-purple-600 rounded">
                  2
                </span>
                <span>Fusce posuere nibh in cursus</span>
              </li>
              <li className="py-4">
                <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-purple-50 text-purple-600 rounded">
                  3
                </span>
                <span>Maecenas sit amet vehicula</span>
              </li>
            </ul>
          </div>
          <div className="container max-w-xl mx-auto text-center md:text-justify md:mx-0 header header__seenon-text mb-4">
            {" "}
            Top Brands we worked with{" "}
          </div>

          <div className="container flex flex-row mx-auto md:mx-0 items-center justify-center max-w-xl ">
            <div className="w-1/2 md:w-1/4 lg:w-1/6  px-3  mb-1 mr-1">
              <img
                className="w-full  "
                src={"/logo/ENOC.png"}
                alt="Enoc Company"
              />
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/6 px-3 mb-1 mr-1">
              <img
                className="w-full "
                src={"/logo/fourpoints.png"}
                alt="Four Points Company"
              />
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/6 px-3 mb-1 mr-1">
              <img
                className="w-full "
                src={"/logo/etisalat.png"}
                alt="Etisalat Company"
              />
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-1 ">
              <img
                className="w-full "
                src={"/logo/dubaicustom.png"}
                alt="Dubai custom"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 order-0 md:order-0 mb-12 md:mb-0">
          <img
            className="sm:max-w-sm lg:max-w-full mx-auto"
            src={"/trust.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
