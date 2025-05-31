import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useCryptoPrices } from '../../lib/crypto';

const PriceWidget: React.FC = () => {
  const { prices, isLoading, isError } = useCryptoPrices();

  if (isLoading) {
    return (
      <div className="animate-pulse bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-error-500">
        Failed to load prices
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="font-heading font-bold mb-4">Live Crypto Prices</h3>
      <div className="space-y-3">
        {prices?.map(coin => (
          <div key={coin.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="font-medium">{coin.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                {coin.symbol.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">${coin.current_price.toLocaleString()}</span>
              <span className={`ml-2 flex items-center ${
                coin.price_change_percentage_24h >= 0 
                  ? 'text-success-500' 
                  : 'text-error-500'
              }`}>
                {coin.price_change_percentage_24h >= 0 
                  ? <TrendingUp className="w-4 h-4" /> 
                  : <TrendingDown className="w-4 h-4" />}
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceWidget;