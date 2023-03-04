import React from "react";

export default function NewFooter() {
  const year = new Date().getFullYear();

  return (
    <footer class="color-box border-t-2 border-gray-300 dark:bg-gray-800  pt-4 pb-8 xl:pt-8">
      <div class="max-w-screen-lg xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 dark:text-gray-300">
        <ul class="text-lg font-light pb-8 flex flex-wrap justify-center">
          <li class="w-1/2 md:w-1/3 lg:w-1/3 p-2 md:p-4 text-sm md:text-base">
            <div class="text-center md:text-justify">
              <h3
                className="mb-8 text-base md:text-base font-bold font-heading"
                data-config-id="cat1"
              >
                Contact us
              </h3>
              <ul>
                <p className="mb-10">
                  623 Harrison St. 2nd Floor abu Dhabi, CA 94170
                </p>
                <p className="mb-2">415-201-6370</p>
                <p>hello@xpressfirst.com</p>
              </ul>
            </div>
          </li>
          <li class="w-1/2 md:w-1/3 lg:w-1/3 p-2 md:p-4 text-sm md:text-base">
            <div class="text-center  md:text-justify">
              <h3
                className="mb-8 text-base md:text-base font-bold font-heading"
                data-config-id="cat2"
              >
                Company
              </h3>
              <ul>
                <li className="mb-2 md:mb-6">
                  <a className="hover:underline" href="#">
                    About Xpressfirst
                  </a>
                </li>
                <li className="mb-2 md:mb-6">
                  <a className="hover:underline" href="#">
                    Services
                  </a>
                </li>
                <li className="mb-2 md:mb-6">
                  <a className="hover:underline" href="#">
                    Interior Design
                  </a>
                </li>
                <li className="mb-2 md:mb-6">
                  <a className="hover:underline" href="#">
                    Chemical Distribution
                  </a>
                </li>
                <li className="mb-2 md:mb-6">
                  <a className="hover:underline" href="#">
                    Car Reselling
                  </a>
                </li>
                <li className="mb-2 md:mb-6">
                  <a className="hover:underline" href="#">
                    IT hardware & networking
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href="#"
                    data-config-id="link2-7"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="max-w-lg md:w-1/3 lg:w-1/3 sm:order-last md:order-first">
            <div>
              <a className="inline-block " href="#">
                <img
                  className="w-72 md:w-64 mb-6"
                  src={"/brandlogo.svg"}
                  alt=""
                />
              </a>
              <div className="flex mb-10 items-center">
                <a
                  className="inline-flex ml-4 items-center justify-center w-6 md:w-8 mr-2"
                  href="#"
                >
                  <img
                    className="hover:text-purple-300"
                    src={"/facebook.svg"}
                    alt=""
                  />
                </a>
                <a
                  className="inline-flex ml-4 items-center justify-center w-6 md:w-8  mr-2 "
                  href="#"
                >
                  <img src={"/twitter.svg"} alt="" />
                </a>
                <a
                  className="inline-flex ml-4 items-center justify-center w-6 md:w-8 "
                  href="#"
                >
                  <img src={"/instagram.svg"} alt="" />
                </a>
              </div>
              <span className="text-sm text-gray-500 font-light">
                Copyright {year} by xpressfirst inc. <br /> All rights reserved{" "}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
