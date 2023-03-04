import React from "react"
import { Link } from "gatsby"

export default function ErrorNotFound() {
	return (
		<div className="flex flex-col items-center justify-center p-24 my-20 lg:py-12 md:px-16 px-4">
			<h1 className="text-7xl font-bold text-indigo-700 pb-2">404</h1>
			<h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 py-2">
				This Page Does Not Exist
			</h2>
			<p className="text-base text-gray-600 py-2 text-center">
				Sorry! We could not find you the page you are looking for. Please check
				URL in address bar and try again.
			</p>
			<div className="flex md:flex-row flex-col items-center justify-center md:gap-8 mt-4 mb-12 w-full">
				<button className="p-4 text-base text-center text-white md:w-auto md:mb-0 mb-4 w-full bg-indigo-700 border rounded-md hover:bg-indigo-800">
					<Link to={"/"}>Go home back</Link>
				</button>
				<button className="p-4 text-base font-semibold text-center md:w-auto w-full bg-gray-100 text-indigo-700 border rounded-md hover:bg-gray-200">
					<Link to={"/contact"}>Contact us</Link>
				</button>
			</div>
		</div>
	)
}
