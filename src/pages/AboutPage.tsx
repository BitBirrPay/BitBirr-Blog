import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';
import NewsletterSignup from '../components/ui/NewsletterSignup';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">About BitBirr</h1>
            <p className="text-xl text-gray-300">
              Ethiopia's trusted crypto knowledge hub, providing tutorials, market insights, and educational content.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
              <p className="text-xl font-medium">
                BitBirr is Ethiopia's trusted crypto knowledge hub, providing tutorials, market insights, and educational content to help local users understand the evolving world of blockchain and digital assets.
              </p>
              
              <p>
                We empower Ethiopians with the tools they need to confidently participate in the global digital economy — all without offering or facilitating financial transactions. Our mission: educate, inform, and inspire.
              </p>

              <p>
                Founded in 2023, BitBirr emerged from a recognition that while cryptocurrency interest was growing rapidly in Ethiopia, reliable, locally-relevant information was scarce. We've assembled a team of Ethiopian crypto enthusiasts, financial educators, and technology experts to bridge this knowledge gap.
              </p>

              <p>
                At BitBirr, we believe that financial education is a fundamental right. By demystifying complex topics like blockchain, cryptocurrency, and decentralized finance, we're helping build a more financially literate and technologically empowered Ethiopia.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Education First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We prioritize clear, accurate, and accessible education on crypto concepts, with a focus on practical knowledge for Ethiopian users.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Unbiased Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our market insights and analysis are independent and objective, helping readers make informed decisions in the volatile crypto space.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Local Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While crypto is global, our content is tailored to Ethiopia's unique economic environment, regulations, and use cases.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-300 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Community Building</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're fostering a knowledgeable crypto community in Ethiopia through educational content, events, and discussion forums.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <h2 className="text-3xl font-bold font-heading mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dawit Alemayehu" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold font-heading">Dawit Alemayehu</h3>
                <p className="text-primary-600 dark:text-gold-400 mb-2">Founder & Lead Analyst</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Former financial analyst with 7+ years of crypto experience
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sara Haile" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold font-heading">Sara Haile</h3>
                <p className="text-primary-600 dark:text-gold-400 mb-2">Content Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Blockchain educator and technical writer
                </p>
              </div>

              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Yonas Bekele" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold font-heading">Yonas Bekele</h3>
                <p className="text-primary-600 dark:text-gold-400 mb-2">Technical Lead</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Software developer and DeFi specialist
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary-50 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold font-heading mb-4">Join Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're a crypto beginner or an experienced enthusiast, BitBirr is here to support your journey. Subscribe to our newsletter, join our community, and enhance your crypto knowledge.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
};

export default AboutPage;