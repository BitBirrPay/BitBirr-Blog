import useSWR from 'swr';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useCryptoPrices(coins: string[] = ['bitcoin', 'ethereum', 'tether']) {
  const { data, error } = useSWR<CryptoPrice[]>(
    `${COINGECKO_API}/simple/price?ids=${coins.join(',')}&vs_currencies=usd&include_24hr_change=true`,
    fetcher,
    { refreshInterval: 30000 } // Refresh every 30 seconds
  );

  return {
    prices: data,
    isLoading: !error && !data,
    isError: error
  };
}