import React from "react";

export default function AboutFeature() {
  return (
    <div className="container mx-auto px-10 mt-14 md:mt-24">
      <div className="mb-2 md:mb-10 lg:mb-16 max-w-xl  text-left">
        <h2 className="leading-normal md:leading-loose text-4xl md:text-5xl font-bold">
          Excellence our Moto, our Strength
        </h2>
      </div>
      <div className="flex flex-wrap -mx-4 mt-8 md:mt-24">
        <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
          <h4 className="mb-4 text-2xl font-bold font-heading"> RELIABILITY</h4>
          <p className="text-gray-500 leading-loose">
            Whatever makes you tick is what makes us tick. We love diving into
            your world and understand your product and its users.
          </p>
        </div>
        <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
          <h4 className="mb-4 text-2xl font-bold font-heading"> OPENNESS</h4>
          <p className="text-gray-500 leading-loose">
            Whatever makes you tick is what makes us tick. We love diving into
            your world and understand your product and its users..
          </p>
        </div>
        <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
          <h4 className="mb-4 text-2xl font-bold font-heading">COMPETENCE</h4>
          <p className="text-gray-500 leading-loose">
            Donec ut ligula nunc. Mauris blandit vel est et facilisis. Integer
            sapien felis, aliquet at posuere et, porttitor quis ligula.
          </p>
        </div>

        <div className="hidden mb-12 lg:mb-0 md:block lg:hidden w-1/2  lg:w-1/3 px-4">
          <h4 className="mb-4 text-2xl font-bold font-heading">COMPASSION</h4>
          <p className="text-gray-500 leading-loose">
            Whatever makes you tick is what makes us tick. We love diving into
            your world and understand your product and its users.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap  mx-auto lg:mt-24">
        <div className="mb-12 lg:mb-0 md:hidden lg:block lg:w-1/3">
          <h4 className="mb-4 text-2xl font-bold font-heading">COMPASSION</h4>
          <p className="text-gray-500 leading-loose">
            Whatever makes you tick is what makes us tick. We love diving into
            your world and understand your product and its users.
          </p>
        </div>
        <div className="mb-12 lg:mb-0  mx-auto  sm:px-20 w-full lg:w-2/3 ">
          <h3 className="max-w-lg  text-3xl md:text-4xl xl:max-w-4xl xl:text-5xl italic font-bold text-purple-600">
            Perfection is not attainable, but if we chase perfection we can
            catch excellence.
          </h3>
          <span className="text-left text-purple-400">-Vince Lombardi</span>
        </div>
      </div>
    </div>
  );
}
