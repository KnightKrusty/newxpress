import React, { useState } from "react";

export default function Review() {
  const [count, setCount] = useState(0);

  const reviews = [
    {
      _id: "61655a3f706b1b8569990957",
      name: "Macias Oneill",
      company: "Tiger Corp",
      review:
        "commodo porta curae orci euismod scelerisque amet nam metus nibh consectetur et class enim nibh blandit dapibus congue mi praesent",
    },
    {
      _id: "61655a3fe1317375f0836590",
      name: "Anita Skinner",
      company: "Doggo corp",
      review:
        "etiam tortor molestie lorem nisi ut adipiscing commodo et sodales condimentum mollis viverra a tempuse",
    },
    {
      _id: "61655a3f5c7cc1bd381d79ec",
      name: "Hess Goodwin",
      company: "Meow corp",
      review:
        "lacus nibh aenean erat molestie rhoncus aliquam nibh ultricies mi mattis vulputate accumsan adipiscing aliquam at mauris elementum ornare ante mattis elit sed vehicula lacus",
    },
    {
      _id: "61655a3f291adac3ee7d0a4f",
      name: "Mcgowan Whitney",
      company: "Lions corp",
      review:
        "donec fermentum auctor nisi nisl platea aenean interdum hac tellus bibendum porta curabitur amet posuere torquent massa amet sociosqu duis nec senectus viverra senectus scelerisque cubilia tempus nisi donec dolor",
    },
    {
      _id: "61655a3f9981517e327f7569",
      name: "Mcintyre Park",
      company: "Tiger Corp",
      review:
        "est cubilia ornare ipsum commodo cursus ultricies venenatis porttitor habitasse",
    },
    {
      _id: "61655a3ff63b591b7ce10805",
      name: "Jan Coffey",
      company: "Tiger Corp",
      review:
        " dapibus per volutpat odio mollis eleifend himenaeos ligula fermentum diam tellus auctor",
    },
    {
      _id: "61655a3fc16a10873d74d517",
      name: "Foster Daniel",
      company: "Tiger Corp",
      review:
        "risus lectus iaculis elementum etiam dictumst erat primis cras viverra platea nec non pretium",
    },
  ];

  function Increasecount(e) {
    const totalreviews = reviews.length - 1;

    if (count === totalreviews) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function DecrementCount(e) {
    const totalreviews = reviews.length - 1;

    if (count <= 0) {
      setCount(totalreviews);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="container px-10 md:p-8 lg:p-20 mx-auto mt-20">
      <div className="flex flex-wrap -mx-3">
        <div className="text-center md:text-left w-full md:w-1/2 px-3  md:order-0">
          <h2 className="leading-loose mb-4 text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold font-heading">
            Our clients <br /> Love US ♥
          </h2>
          <p className="mb-6 leading-loose text-gray-600">
            There are many reasons why <br /> our client love to work with us
          </p>

          <div className="items-center  justify-center md:items-start md:justify-start flex mb-10">
            <button onClick={DecrementCount}>
              <img
                className="bg-purple-400 hover:bg-purple-600 rounded-full h-12 w-12"
                src={"/leftarrow.svg"}
              />
            </button>

            <button className="ml-6" onClick={Increasecount}>
              <img
                className="bg-purple-400 hover:bg-purple-600 rounded-full h-12 w-12"
                src={"/rightarrow.svg"}
              />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-1 lg:px-3  order-0 mb-12 md:mb-0">
          <div className="p-8  h-80 lg:h-3/4 bg-purple-700 shadow-xl rounded-3xl">
            <div className="flex items-center mb-4">
              <div className="text-white">
                <p className="text- text-xl">{reviews[count].name}</p>
                <p>{reviews[count].company}</p>
              </div>
            </div>
            <p className="text-white leading-loose ">{reviews[count].review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
