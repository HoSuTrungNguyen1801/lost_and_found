import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDownCircleFill, RiMenuFill } from 'react-icons/ri';

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Header", href: "/header" },
  { name: "Login", href: "/login" },
];

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdown((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-600">FindIt</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-blue-600">
                  Lost Items
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-blue-600">
                  Found Items
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <RiMenuFill className="mr-1" />
                  Tùy chọn
                </button>
                {isDropdown && (
                  <ul className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 transition-all duration-200 ease-in-out z-10">
                    {navigation.map((item) => (
                      <li key={item.name} className="hover:bg-blue-50">
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-blue-600">
            <RiArrowDownCircleFill className="text-2xl" /><i className='flex items-center col-span-2 first-letter:'>Log In
            </i>
          </Link>   
        </div>
      </div>
    </header>
  );
};

export default Navbar;
