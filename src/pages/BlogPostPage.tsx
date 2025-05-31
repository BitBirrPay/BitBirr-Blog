import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import SocialShare from '../components/utils/SocialShare';
import RelatedPosts from '../components/blog/RelatedPosts';
import ReadingProgress from '../components/blog/ReadingProgress';
import PriceWidget from '../components/crypto/PriceWidget';
import { getBlogPost } from '../lib/supabase';
import { mockBlogPosts } from '../data/mockData'; // Fallback data

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState(mockBlogPosts.find(p => p.slug === slug));
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      try {
        const data = await getBlogPost(slug);
        if (data) setPost(data);
      } catch (error) {
        console.error('Failed to load post:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      <ReadingProgress />
      
      {/* Hero Image and Title */}
      <div className="relative">
        <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] relative">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary-600 text-white rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Post Meta */}
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-8 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} min read
              </div>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert mb-10">
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <h2>What is USDT (Tether)?</h2>
              <p>
                USDT, or Tether, is what's known as a "stablecoin" in the cryptocurrency world. Unlike Bitcoin or Ethereum, which can fluctuate wildly in value, USDT is designed to maintain a steady value of exactly 1 US Dollar. This stability is achieved through Tether Limited's claim that each USDT token is backed by one US dollar held in reserve.
              </p>
              
              <h2>Why USDT Matters in Ethiopia</h2>
              <p>
                Ethiopia faces unique challenges when it comes to accessing global financial markets. With currency controls, limited forex availability, and a depreciating birr, many Ethiopians find it difficult to protect their savings against inflation or conduct international business efficiently.
              </p>
              <p>
                USDT offers several benefits in this context:
              </p>
              <ul>
                <li>Value Stability: While Bitcoin might be worth 20% more or less tomorrow, USDT aims to always be worth $1, making it safer for saving.</li>
                <li>Access to Dollar Economy: It provides a digital equivalent to holding US dollars without needing a foreign bank account.</li>
                <li>Remittance Potential: Ethiopians abroad can send money home more quickly and with lower fees than traditional remittance services.</li>
                <li>Trading Pair: USDT serves as a base currency for trading other cryptocurrencies, making it easier to enter and exit positions.</li>
              </ul>
              
              <h2>Legal Considerations in Ethiopia</h2>
              <p>
                It's important to note that the National Bank of Ethiopia (NBE) has issued statements regarding cryptocurrencies. Currently, cryptocurrencies are not legally recognized as payment methods within Ethiopia. Anyone considering using USDT should be aware of these regulations and understand that the legal framework may evolve.
              </p>
              
              <h2>How to Safely Use USDT</h2>
              <p>
                For those interested in exploring USDT for educational purposes:
              </p>
              <ol>
                <li>Learn about hardware and software wallets for secure storage</li>
                <li>Understand the different blockchains USDT operates on (Ethereum, Tron, etc.)</li>
                <li>Stay informed about any regulatory changes in Ethiopia</li>
                <li>Consider the counterparty risk that comes with any stablecoin</li>
              </ol>
              
              <h2>Conclusion</h2>
              <p>
                While USDT is not without risks, it represents an important bridge between traditional finance and the cryptocurrency ecosystem. For Ethiopians looking to understand the global digital economy, learning about stablecoins like USDT is an essential part of crypto literacy. As Ethiopia continues its journey toward greater financial inclusion and technological advancement, understanding these tools becomes increasingly valuable.
              </p>
              <p>
                Remember that this article is purely educational and does not constitute financial advice. Always conduct your own research and consider consulting with financial and legal professionals before making any decisions involving cryptocurrencies.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={mockBlogPosts.filter(p => p.id !== post.id).slice(0, 4)} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Live Crypto Prices */}
              <PriceWidget />
              
              {/* Author Box */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt={post.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{post.author}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Crypto Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Specializing in cryptocurrency analysis with a focus on African markets. 5+ years of experience in the crypto space.
                </p>
              </div>
              
              {/* Social Share */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <SocialShare 
                  url={window.location.href} 
                  title={post.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;