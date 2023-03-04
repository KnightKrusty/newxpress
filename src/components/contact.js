import React from "react";
import Map from "./map";

export default function ContactUs() {
  const mapProps = {
    options: {
      center: { lat: 25.20984325, lng: 55.275381 },
      zoom: 20,
    },
  };

  return (
    <div className="flex flex-wrap overflow-hidden  ">
      <div className="w-full  overflow-hidden  px-8 py-12 md:px-16 md:py-20   md:w-1/2 lg:w-1/2 xl:w-1/2 relative">
        <img
          src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
          className="h-full w-full absolute inset-0 bg-cover bg-center"
          alt="map"
        />

        <div className="w-full relative xl:pl-16">
          <div className="z-20 ">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">
              We’d Love to Hear From You
            </h1>

            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-8">
              We’re here to help and answer any question you might have.
            </h2>
            <div className="mt-4 md:mt-12">
              <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                Our Office
              </h2>
              <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                623 Harrison St. 2nd Floor Abu Dhabi, CA 94107
              </h2>
            </div>
            <div className="mt-4 md:mt-8">
              <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                Contact
              </h2>
              <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                415-201-6370
              </h2>
            </div>
            <div className="mt-4 md:mt-8">
              <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                Email
              </h2>
              <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                hello@xpressfirst.com
              </h2>
            </div>
            <div className="aspect-w-16 aspect-h-9 mt-4 rounded-xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.77466609477!2d55.27333231500983!3d25.210820483889826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428ed2dd4241%3A0xcd2b0375e8f43ced!2sRolex%20Tower%20-%20Trade%20Centre%20-%20DIFC%20-%20Dubai!5e0!3m2!1sen!2sae!4v1634119105765!5m2!1sen!2sae"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-contact p-8 md:p-20 overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-white mb-10">
          Let’s Talk
        </h1>
        <form className="w-full max-w-2xl">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3 mb-10 ">
              <input
                className="appearance-none block w-full placeholder-white bg-transparent text-white border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-purple-300"
                id="grid-first-name"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full placeholder-white bg-transparent text-white border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-purple-300"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full placeholder-white bg-transparent text-white border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-purple-300"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full placeholder-white bg-transparent text-white border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-purple-300"
                id="phone"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <textarea
                className=" no-resize appearance-none block w-full placeholder-white bg-transparent text-white border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-purple-300 h-48 resize-none"
                id="message"
                placeholder="Lets talk about bussiness"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-transparent border-2  border-white text-white  font-bold py-2 px-10 rounded hover:bg-white hover:text-purple-700"
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
