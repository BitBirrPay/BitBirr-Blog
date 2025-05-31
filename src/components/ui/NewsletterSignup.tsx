import React from 'react';
import Button from './Button';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="bg-primary-800 dark:bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Stay Ahead of the Curve!</h2>
          <p className="text-lg mb-8 text-gray-300">
            Subscribe to the BitBirr newsletter and receive weekly market insights, beginner-friendly tutorials, exclusive expert interviews, and updates on Ethiopia's crypto scene.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md bg-primary-700 dark:bg-gray-700 border border-primary-600 dark:border-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-400"
              required
            />
            <Button variant="secondary" size="lg" type="submit">
              Subscribe
            </Button>
          </form>
          <p className="text-sm mt-4 text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;