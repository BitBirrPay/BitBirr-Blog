import React from 'react';
import { Twitter, Facebook, Linkedin, Send } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  return (
    <div className="flex flex-col space-y-3">
      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Share this article</h4>
      <div className="flex space-x-3">
        <a 
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#1877F2] text-white hover:bg-opacity-90 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#0A66C2] text-white hover:bg-opacity-90 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#26A5E4] text-white hover:bg-opacity-90 transition-colors"
          aria-label="Share on Telegram"
        >
          <Send className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialShare;