import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Bell } from 'lucide-react';
import Button from '../components/ui/Button';
import BlogPostCard from '../components/blog/BlogPostCard';
import NewsletterSignup from '../components/ui/NewsletterSignup';
import { mockBlogPosts, mockTrendingPosts } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-display-md font-heading font-bold leading-tight mb-6">
              Your Gateway to Crypto Insights & Knowledge
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Empowering Ethiopia with market analysis, tutorials, and the latest crypto trends.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              as={Link} 
              to="/category/latest"
            >
              Read Latest Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-800 rounded-full text-primary-600 dark:text-primary-300 mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-xl mb-3">Market Analysis</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expert insights on Bitcoin, Ethereum, and other major cryptocurrencies relevant to Ethiopian investors.
              </p>
              <Link 
                to="/category/market-analysis" 
                className="text-primary-600 dark:text-gold-400 font-medium hover:underline"
              >
                View Analysis
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-800 rounded-full text-primary-600 dark:text-primary-300 mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-xl mb-3">Tutorials</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Step-by-step guides for beginners and advanced users on using crypto wallets, exchanges, and more.
              </p>
              <Link 
                to="/category/tutorials" 
                className="text-primary-600 dark:text-gold-400 font-medium hover:underline"
              >
                View Tutorials
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-800 rounded-full text-primary-600 dark:text-primary-300 mb-4">
                <Bell className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-xl mb-3">Latest News</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stay updated with the latest cryptocurrency news and how they impact the Ethiopian market.
              </p>
              <Link 
                to="/category/news" 
                className="text-primary-600 dark:text-gold-400 font-medium hover:underline"
              >
                View News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-heading font-bold">Latest Insights</h2>
            <Link 
              to="/blog" 
              className="text-primary-600 dark:text-gold-400 hover:underline font-medium"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBlogPosts.slice(0, 1).map(post => (
              <BlogPostCard key={post.id} post={post} featured />
            ))}
            
            {mockBlogPosts.slice(1, 7).map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Feature */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">About BitBirr</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                BitBirr is Ethiopia's trusted crypto knowledge hub, providing tutorials, market insights, and educational content to help local users understand the evolving world of blockchain and digital assets.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We empower Ethiopians with the tools they need to confidently participate in the global digital economy — all without offering or facilitating financial transactions. Our mission: educate, inform, and inspire.
              </p>
              <Button 
                variant="outline" 
                as={Link} 
                to="/about"
              >
                Learn More About Us
              </Button>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-heading font-bold mb-4">Trending Posts</h3>
              <div className="space-y-4">
                {mockTrendingPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                    <div className="flex items-start gap-4">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium group-hover:text-primary-600 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {post.date} · {post.readTime} min read
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
};

export default HomePage;