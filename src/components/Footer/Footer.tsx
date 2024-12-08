import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src="/logo.svg" alt="LearnAI Logo" />
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Empowering learners with AI-driven personalized education.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  Platform
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/modules"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Modules
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/community"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ai-recommendations"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      AI Recommendations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/progress-tracking"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Progress Tracking
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/faq"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help-center"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/feedback"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/press"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie-policy"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accessibility"
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-300 xl:text-center">
            &copy; {new Date().getFullYear()} LearnAI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
