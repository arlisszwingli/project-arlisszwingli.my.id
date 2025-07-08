import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-[#19222d] text-gray-100">
        <div className="border-t border-gray-300 text-center text-xs sm:text-sm py-4 px-4">
          &copy; {new Date().getFullYear()} Arliss Zwingli Sitanggang | All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;