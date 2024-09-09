import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';

function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 h-auto shadow-md sm:px-6 sm:py-4 md:px-8 md:py-5 md:h-[80px]">
      <h2 className="text-[14px] font-sans font-extrabold dark:text-white sm:text-[14px] md:text-[24px]">
        Where in the World?
      </h2>
      <span
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDarkMode} // Trigger dark mode toggle on click
      >
        <MdOutlineDarkMode size={20} className="dark:text-white sm:size={22} md:size={24}" />
        <p className="font-sans font-semibold text-[12px] dark:text-white sm:text-[12px] md:text-[12px]">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </p>
      </span>
    </header>
  );
}

export default Header;
