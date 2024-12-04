const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">EquiSports</h2>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="space-y-2 md:flex md:space-x-6 md:space-y-0">
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2024 EquiSports. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
