import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  // Reference for the scrollable container
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-12 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-heading font-bold">Related Posts</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef} 
        className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {posts.map((post) => (
          <div key={post.id} className="min-w-[280px] sm:min-w-[320px] snap-start">
            <Link to={`/blog/${post.slug}`} className="block group">
              <div className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-heading font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 dark:text-gold-400 text-sm font-medium">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;