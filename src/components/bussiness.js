import React from "react";

export default function BusinessList() {
  const listData = [
    {
      maintitle: "Perfection Art Luxury",
      title: "Luxury Cars Reselling",
      link: "#",
      desciption:
        "  The extension comes with three pre-built pages to help you getstarted faster. You can change the text and images and you'regood to go.The extension comes with three pre-built pages to help you getstarted faster. You can change the text and images and you'regood to go.",
      image: "car.jpeg",
    },
  ];

  return (
    <section className="pt-12">
      <div className="mb-16 mt-10 md:mb-24 items-center flex flex-wrap flex-col">
        <span className="text-xl sm:text-2xl  md:text-4xl  lg:text-6xl">
          Perfection Speed Luxury{" "}
        </span>
        <span className="text-xl sm:text-2xl  md:text-4xl lg:text-6xl">
          Art Life
        </span>
      </div>

      <div className=" items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h3 className="font-light text-purple-600 text-2xl md:text-3xl lg:text-4xl">
              Luxury Cars Reselling
            </h3>
            <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base sm:mx-auto md:mt-5 md:text-sm lg:mx-0">
              Mus subsidium harum iste nobis eos-felis error ut ante eos est
              matretn capita. Sem sed arcana est nisl sem sapien eos per'ab quos
              mi ea. Hac interpres eodem nisi morbi rem-felis eorum mi fuga nec
              est putabat capita. Hac eum haeres qui lius eos orator sed per'ad
              nunc ut ex.
            </p>
          </div>
        </div>

        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mt-10">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src={"/images/lamborgini.jpg"}
          />
        </div>
      </div>

      <div className="flex flex-wrap  md:overflow-hidden mt-20 sm:mt-24 px-5 sm:px-10 md:px-20">
        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden ">
          <img
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/car1.jpg"}
          />
        </div>

        <div className="w-1/3 aspect-w-21 aspect-h-9 overflow-hidden ">
          <img
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/car2.jpg"}
            alt=""
          />
        </div>

        <div className="w-1/3 aspect-w-4 aspect-h-2 overflow-hidden ">
          <img
            className="w-full h-full object-center object-cover lg:w-full lg:h-full "
            src={"/images/car3.jpg"}
            alt=""
          />
        </div>
      </div>

      <div className="my-16 md:my-24 items-center flex flex-wrap flex-col">
        <span className="text-xl sm:text-2xl md:text-4xl  lg:text-6xl">
          We Know{" "}
        </span>
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          The Art of Building Beautiful
        </span>
      </div>

      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h3 className="font-light text-purple-600 text-2xl md:text-3xl lg:text-4xl">
              Interior Design
            </h3>
            <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base sm:mx-auto md:mt-5 md:text-sm lg:mx-0">
              Mus subsidium harum iste nobis eos-felis error ut ante eos est
              matretn capita. Sem sed arcana est nisl sem sapien eos per'ab quos
              mi ea. Hac interpres eodem nisi morbi rem-felis eorum mi fuga nec
              est putabat capita. Hac eum haeres qui lius eos orator sed per'ad
              nunc ut ex.
            </p>
          </div>
        </div>

        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mt-10">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src={"/images/homeinterior.jpg"}
          />
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden  mt-20 sm:mt-24 px-5 sm:px-10 md:px-20">
        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/interiorroom1.jpg"}
          />
        </div>

        <div className="w-1/3  aspect-w-4  aspect-h-1 overflow-hidden">
          <img
            className=" w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/interiorroom2.jpg"}
            alt=""
          />
        </div>

        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/interiorroom3.jpg"}
            alt=""
          />
        </div>
      </div>

      <div className="my-16 md:my-24 items-center flex flex-wrap flex-col">
        <span className="text-xl sm:text-2xl md:text-4xl  lg:text-6xl">
          Equip Your Home, Office{" "}
        </span>
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          With Tech & Networking Gear{" "}
        </span>
      </div>

      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h3 className="font-light text-purple-600 text-2xl md:text-3xl lg:text-4xl">
              IT & Hardware Networking
            </h3>
            <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base sm:mx-auto md:mt-5 md:text-sm lg:mx-0">
              Mus subsidium harum iste nobis eos-felis error ut ante eos est
              matretn capita. Sem sed arcana est nisl sem sapien eos per'ab quos
              mi ea. Hac interpres eodem nisi morbi rem-felis eorum mi fuga nec
              est putabat capita. Hac eum haeres qui lius eos orator sed per'ad
              nunc ut ex.
            </p>
          </div>
        </div>

        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mt-10">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src={"/images/itnetworking.jpg"}
          />
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden  mt-20 sm:mt-24 px-5 sm:px-10 md:px-20">
        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/office&hardware1.jpg"}
          />
        </div>

        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/office&hardware2.jpg"}
            alt=""
          />
        </div>

        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/office&hardware3.jpg"}
            alt=""
          />
        </div>
      </div>

      <div className="my-16 md:my-24 items-center flex flex-wrap flex-col">
        <span className="text-xl sm:text-2xl md:text-4xl  lg:text-6xl">
          High Performance Industrial{" "}
        </span>
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          Chemicals
        </span>
      </div>

      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h3 className="font-light text-purple-600 text-2xl md:text-3xl lg:text-4xl">
              Chemical Distribution
            </h3>
            <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base sm:mx-auto md:mt-5 md:text-sm lg:mx-0">
              Mus subsidium harum iste nobis eos-felis error ut ante eos est
              matretn capita. Sem sed arcana est nisl sem sapien eos per'ab quos
              mi ea. Hac interpres eodem nisi morbi rem-felis eorum mi fuga nec
              est putabat capita. Hac eum haeres qui lius eos orator sed per'ad
              nunc ut ex.
            </p>
          </div>
        </div>

        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mt-10">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src={"/images/shipwithchemical.jpg"}
          />
        </div>
      </div>

      <div className="flex flex-wrap overflow-hidden  mt-20  mb-20 sm:mt-24 px-5 sm:px-10 md:px-20">
        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={"/images/chemical1.jpg"}
          />
        </div>

        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-right object-cover lg:w-full lg:h-full"
            src={"/images/chemical2.jpg"}
            alt=""
          />
        </div>

        <div className="w-1/3  aspect-w-4  aspect-h-2 overflow-hidden">
          <img
            className=" w-full h-full object-right object-cover lg:w-full lg:h-full"
            src={"/images/chemical3.jpg"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
