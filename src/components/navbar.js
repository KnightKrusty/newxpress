import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Popover, Transition } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Services", href: "/services/" },
  { name: "Contact us", href: "/contact/" },
];

export default function NavBar({ ml = "" }) {
  return (
    <Popover>
      <div className={`relative pt-6 px-4 sm:px-6 lg:px-8 ${ml}`}>
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src={"/mainlogo.png"} />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <img className="h-6 w-6" src={"/menu.svg"} />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <Link
                className="font-medium   hover:underline"
                key={item.name}
                to={item.href}
                activeClassName="text-white bg-purple-800 p-2 rounded"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={"/mainlogo.png"} alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <img className="h-6 w-6" src={"/close.svg"} />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  className="block px-3 py-2 rounded-md text-base font-medium  hover:underline hover:bg-gray-50"
                  key={item.name}
                  to={item.href}
                  activeClassName="text-white bg-purple-800 p-2 rounded"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
