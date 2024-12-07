import { Fade, Slide } from "react-awesome-reveal";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-12 border-t-2 border-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-12 text-textLight">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Info */}
          <Fade>
            <div className="space-y-4">
              <Link to={"/"} className="text-3xl font-bold text-white">
                EquiSports
              </Link>
              <p className="text-sm text-white text-opacity-80">
                EquiSports brings the best sports news, equipment, and updates
                to your fingertips. Join our community today!
              </p>
            </div>
          </Fade>

          {/* Navigation Links */}
          <Slide direction="up">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
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
                    Back to top
                  </a>
                </li>
              </ul>
            </div>
          </Slide>
          {/* contact */}
          <Fade>
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <p className="text-secondary">Phone : </p>
                  <a
                    href="tel:+8801915131099"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +8801915131099
                  </a>
                </li>
                <li className="flex flex-wrap gap-2">
                  <p className="text-secondary">Email : </p>
                  <a
                    href="mailto:huzaifaislamrakib@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HuzaifaIslamRakib@gmail.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <p className="text-secondary">Location: </p>
                  <a
                    href="https://maps.app.goo.gl/AHraT1J5wR6omKLMA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shah hall, CUET, Chittagong
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
                  href="https://www.facebook.com/Huzaifaislamrokib"
                  className="text-secondary transition hover:text-primary"
                  aria-label="facebook"
                  target="_blank"
                >
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/huzaifaislam/"
                  className="text-secondary transition hover:text-primary"
                  aria-label="linkedin"
                  target="_blank"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Md-Huzaifa-Islam"
                  className="text-secondary transition hover:text-primary"
                  aria-label="github"
                  target="_blank"
                >
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </Slide>

          {/* Footer Text */}
          <Fade>
            <p className="mt-4 text-sm text-white md:mt-0">
              &copy; 2024 EquiSports. All rights reserved.
            </p>
          </Fade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
