import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner px-6 py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Sausan Dashboard. All rights reserved.
    </footer>
  );
};

export default Footer;