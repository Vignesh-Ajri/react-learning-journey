import React from "react";

function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-purple-800/30">
      © {new Date().getFullYear()} BlogApp. All rights reserved.
    </footer>
  );
}

export default Footer;
