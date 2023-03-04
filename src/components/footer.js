import React from "react";

export default function Footer() {
  return (
    <section className="mt-20 bg-gray-100 border-t-2 border-gray-400">
      <div className="flex flex-wrap">
        <div className="w-full md:w-5/12  py-10 px-6 bg-gray-100">
          <div className="max-w-xs mx-auto">
            <a className="inline-block" href="#">
              <img className="h-40" src={"/brandlogo.svg"} alt="" />
            </a>
            <div className="flex mb-16 md:mb-40 items-center">
              <a
                className="inline-flex ml-4 items-center justify-center w-8 h-8 mr-2"
                href="#"
              >
                <img src={"/facebook.svg"} alt="" />
              </a>
              <a
                className="inline-flex ml-4 items-center justify-center w-8 h-8 mr-2 "
                href="#"
              >
                <img src={"/twitter.svg"} alt="" />
              </a>
              <a
                className="inline-flex ml-4 items-center justify-center w-8 h-8"
                href="#"
              >
                <img src={"/instagram.svg"} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12  py-20 px-6 lg:pl-40">
          <div className="flex flex-wrap mt-16  pb-20 border-b">
            <div className="w-full text-center  md:w-1/2 md:text-left lg:w-1/2 px-4 mb-10 lg:mb-0">
              <h3
                className="mb-8 text-xl font-bold font-heading"
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
            <div className="w-full text-center md:text-left md:w-1/2 lg:w-1/2 px-4 mb-10 lg:mb-0">
              <h3 className="mb-8 text-xl font-bold font-heading">Company</h3>
              <ul>
                <li className="mb-6">
                  <a className="hover:underline" href="#">
                    About Xpressfirst
                  </a>
                </li>
                <li className="mb-6">
                  <a className="hover:underline" href="#">
                    Services
                  </a>
                </li>
                <li className="mb-6">
                  <a className="hover:underline" href="#">
                    Interior Design
                  </a>
                </li>
                <li className="mb-6">
                  <a className="hover:underline" href="#">
                    Chemical Distribution
                  </a>
                </li>
                <li className="mb-6">
                  <a className="hover:underline" href="#">
                    Car Reselling
                  </a>
                </li>
                <li className="mb-6">
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
          </div>
          <div className="relative mt-8 pb-32 lg:pb-0 text-center">
            <p className="font-semibold font-heading">
              © Copyright 2021 XpressFirst
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
