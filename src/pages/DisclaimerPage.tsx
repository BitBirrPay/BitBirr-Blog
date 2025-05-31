import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary-600 dark:text-gold-400 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Legal Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              BitBirr is a crypto media platform providing educational content, market insights, and tutorials. We do not provide financial, investment, or trading advice, nor do we facilitate the purchase, sale, or exchange of cryptocurrencies.
            </p>
            
            <h2>Educational Purpose Only</h2>
            <p>
              All content on BitBirr is provided strictly for informational and educational purposes. Nothing on this website should be interpreted as financial advice, endorsement, or recommendation to buy, sell, or hold any cryptocurrency or digital asset.
            </p>
            
            <h2>No Financial Services</h2>
            <p>
              BitBirr is not a financial institution, investment advisor, broker, or exchange. We do not offer any services related to the trading, exchange, or storage of cryptocurrencies or any financial instruments.
            </p>
            
            <h2>Risk Disclosure</h2>
            <p>
              Cryptocurrencies and digital assets involve significant risk, including the possible loss of principal. Prices can be highly volatile, and investment in these assets may not be suitable for all investors. Before making any financial decisions, we strongly recommend consulting with qualified financial professionals.
            </p>
            
            <h2>Regulatory Compliance</h2>
            <p>
              Users are responsible for their own decisions, and we recommend complying with local laws, including those set by the National Bank of Ethiopia. The legal status of cryptocurrencies in Ethiopia and other jurisdictions may change, and users should stay informed about relevant regulations.
            </p>
            
            <h2>No Guarantees</h2>
            <p>
              While we strive to provide accurate and up-to-date information, BitBirr makes no guarantees regarding the accuracy, completeness, or reliability of any content on our platform. Market analysis, price predictions, and other insights should not be considered as guarantees of future performance.
            </p>
            
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, tools, or resources. These links are provided for convenience and educational purposes only. BitBirr has no control over the content or practices of these third parties and assumes no responsibility for them.
            </p>
            
            <h2>User Agreement</h2>
            <p>
              By using BitBirr, you agree you are here for informational purposes only. You acknowledge that you have read, understood, and agree to this disclaimer, and you accept full responsibility for your own decisions and actions related to cryptocurrencies and digital assets.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at info@bitbirr.com.
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
              Last updated: May 15, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;