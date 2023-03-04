import React from "react"

export default function LogoCloud() {
  return (
    <div className="container mt-24 mx-auto px-4">
      <div>
        <h2 className="mb-12 text-3xl text-center text-gray-900 md:text-5xl">
          500+ customers love xpressfirst
        </h2>
      </div>
      <div className="max-w-8xl mx-auto flex flex-wrap items-center justify-center -mb-12">
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-40 object-center"
            src={"/logo/ENOC.png"}
            alt="Enoc Company"
          />
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-40 object-center"
            src={"/logo/halliburton.png"}
            alt="Halliburton Company"
          />
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-44 object-center"
            src={"/logo/adnoc.png"}
            alt="Adnoc Company"
          />
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-40 object-center"
            src={"/logo/dubaicustom.png"}
            alt="Dubai custom"
          />
        </div>
      </div>

      <div className="max-w-8xl mx-auto flex flex-wrap items-center justify-center mt-10">
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-32 object-center"
            src={"/logo/etisalat.png"}
            alt="Etisalat"
          />
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-44 object-center"
            src={"/logo/dubaipolice.png"}
            alt="Dubai Police"
          />
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-40 object-center"
            src={"/logo/westin.png"}
            alt="Westin"
          />
        </div>
        <div className="w-1/2 md:w-1/4 lg:w-1/6 px-2 mb-12">
          <img
            className="mx-auto w-32 object-center"
            src={"/logo/fourpoints.png"}
            alt="Four Points"
          />
        </div>
      </div>
    </div>
  )
}
