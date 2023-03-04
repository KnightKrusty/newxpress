import React from "react";

function CloudLogo() {
  return (
    <>
      <div className="container mt-24 mx-auto px-4">
        <h2 className="mb-12 text-3xl text-center text-gray-900 md:text-5xl">
          500+ customers love xpressfirst
        </h2>
      </div>

      <div className="mx-auto container">
        <div className="w-full flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full lg:w-9/12 bg-gray-100 rounded-full" />
          <div className="flex lg:flex-row flex-col items-center  justify-between pt-16 border-brands lg:w-11/12 xl:w-9/12 f-f-l">
            <div className="flex lg:flex-row flex-col items-center  justify-between w-full">
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/ENOC.png"}
                  alt="Enoc Company"
                />
              </div>
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/halliburton.png"}
                  alt="Halliburton Company"
                />
              </div>
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/adnoc.png"}
                  alt="Adnoc Company"
                />
              </div>
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/dubaicustom.png"}
                  alt="Dubai custom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto container">
        <div className="w-full flex flex-col items-center justify-center py-12 px-4">
          <div className="w-full lg:w-9/12 h-0.5 bg-gray-100 rounded-full" />
          <div className="flex lg:flex-row flex-col items-center  justify-between pt-16 border-brands lg:w-11/12 xl:w-9/12 f-f-l">
            <div className="flex lg:flex-row flex-col items-center  justify-between w-full">
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/etisalat.png"}
                  alt="Etisalat"
                />
              </div>
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/dubaipolice.png"}
                  alt="Dubai Police"
                />
              </div>
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/westin.png"}
                  alt="Westin"
                />
              </div>
              <div className="pb-8 lg:pb-0">
                <img
                  className="mx-auto w-32 object-center"
                  src={"/logo/fourpoints.png"}
                  alt="Four Points"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloudLogo;
