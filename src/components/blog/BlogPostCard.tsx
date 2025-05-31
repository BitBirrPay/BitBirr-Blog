import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, featured = false }) => {
  return (
    <article 
      className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className={`w-full object-cover ${featured ? 'h-64 md:h-80' : 'h-48'}`}
          />
          {post.category && (
            <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-xs rounded-full">
              {post.category}
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-4 sm:p-6">
        <Link to={`/blog/${post.slug}`}>
          <h3 className={`font-heading font-bold hover:text-primary-600 dark:hover:text-gold-400 transition-colors ${
            featured ? 'text-2xl mb-3' : 'text-xl mb-2'
          }`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </span>
          </div>
          
          <Link 
            to={`/blog/${post.slug}`} 
            className="text-primary-600 hover:text-primary-700 dark:text-gold-400 dark:hover:text-gold-300 font-medium"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;