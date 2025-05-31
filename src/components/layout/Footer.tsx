import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Send } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-4">
              <Logo light />
            </div>
            <p className="text-gray-300 mb-4 max-w-xs">
              BitBirr is Ethiopia's leading crypto knowledge hub, sharing trusted insights for a digital future.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/category/market-analysis" className="text-gray-300 hover:text-gold-400 transition-colors">Market Analysis</Link>
              </li>
              <li>
                <Link to="/category/tutorials" className="text-gray-300 hover:text-gold-400 transition-colors">Tutorials</Link>
              </li>
              <li>
                <Link to="/category/news" className="text-gray-300 hover:text-gold-400 transition-colors">News</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-gold-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-gold-400 transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-gold-400 transition-colors">Terms of Use</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for weekly updates on crypto insights and tutorials.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-primary-800 border border-primary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-primary-900 font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 BitBirr. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Designed with ♥ for the Ethiopian crypto community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;