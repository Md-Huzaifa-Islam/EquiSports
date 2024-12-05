import { Fade, Slide } from "react-awesome-reveal";
const Footer = () => {
  return (
    <footer className="border-t-2 border-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-12 text-textLight">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Info */}
          <Fade>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">EquiSports</h2>
              <p className="text-sm text-secondary">
                EquiSports brings the best sports news, equipment, and updates
                to your fingertips. Join our community today!
              </p>
            </div>
          </Fade>

          {/* Newsletter */}
          <Slide direction="up">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-primary">
                Subscribe to our Newsletter
              </h3>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border border-borderGray bg-backgroundLight px-4 py-2 text-textDark outline-none focus:ring focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary py-2 text-white shadow hover:bg-secondary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Slide>

          {/* Navigation Links */}
          <Fade>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-primary">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-secondary transition hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary transition hover:text-primary"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary transition hover:text-primary"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-borderGray pt-4 md:flex-row">
          {/* Social Media Links */}
          <Slide direction="up">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-secondary transition hover:text-primary"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6.01c-.77.35-1.59.58-2.46.69a4.3 4.3 0 001.9-2.38c-.83.49-1.75.85-2.73 1.04A4.29 4.29 0 0016.2 4c-2.38 0-4.3 1.92-4.3 4.3 0 .34.03.67.1.99-3.57-.18-6.74-1.89-8.87-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.92 3.56-.71-.02-1.37-.22-1.95-.55v.06c0 2.08 1.48 3.81 3.45 4.2-.36.1-.74.15-1.13.15-.28 0-.54-.03-.81-.08.55 1.71 2.15 2.95 4.05 2.98a8.62 8.62 0 01-5.3 1.83c-.34 0-.67-.02-1-.06A12.15 12.15 0 008.29 21c7.88 0 12.19-6.52 12.19-12.18 0-.19-.01-.38-.02-.57a8.71 8.71 0 002.1-2.23z" />
                  </svg>
                </a>
              </li>
              {/* Add other icons */}
            </ul>
          </Slide>

          {/* Footer Text */}
          <Fade>
            <p className="mt-4 text-sm text-secondary md:mt-0">
              &copy; 2024 EquiSports. All rights reserved.
            </p>
          </Fade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
