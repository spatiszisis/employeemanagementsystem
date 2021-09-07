import React from 'react'

const Navbar = () => {

    return (
        <div className="px-4 py-5 md:px-24 lg:px-8 bg-gray-800">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center mr-8"
              >
                <span className="ml-2 text-xl font-bold tracking-wide text-white">
                  Employee Managment System
                </span>
              </a>
            </div>
          </div>
        </div>
      );
}

export default Navbar
