import { useState, useEffect } from 'react';

export type Currency = 'CHF' | 'EUR';

interface CurrencyData {
  currency: Currency;
  symbol: string;
  conversionRate: number; // CHF to EUR conversion rate
}

const CURRENCY_DATA: Record<Currency, CurrencyData> = {
  CHF: { currency: 'CHF', symbol: 'CHF', conversionRate: 1 },
  EUR: { currency: 'EUR', symbol: '€', conversionRate: 0.95 } // 1 CHF ≈ 0.95 EUR (approximate parity)
};

/**
 * Hook to automatically detect and provide currency based on user's location
 * Falls back to CHF if detection fails
 */
export const useCurrency = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyData>(CURRENCY_DATA.CHF);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Try to detect currency from browser locale first (faster)
        const browserLang = navigator.language.toLowerCase();
        
        // German-speaking countries
        if (browserLang.includes('de-de') || browserLang.includes('de-at')) {
          setCurrencyData(CURRENCY_DATA.EUR);
          setIsLoading(false);
          return;
        }
        
        // Switzerland
        if (browserLang.includes('de-ch') || browserLang.includes('fr-ch') || browserLang.includes('it-ch')) {
          setCurrencyData(CURRENCY_DATA.CHF);
          setIsLoading(false);
          return;
        }

        // Fallback: Try IP geolocation (free service)
        try {
          const response = await fetch('https://ipapi.co/json/', {
            signal: AbortSignal.timeout(3000) // 3 second timeout
          });
          
          if (response.ok) {
            const data = await response.json();
            const countryCode = data.country_code;
            
            // Switzerland uses CHF
            if (countryCode === 'CH') {
              setCurrencyData(CURRENCY_DATA.CHF);
            } 
            // Germany, Austria, and other EU countries use EUR
            else if (['DE', 'AT', 'FR', 'IT', 'NL', 'BE', 'ES', 'PT'].includes(countryCode)) {
              setCurrencyData(CURRENCY_DATA.EUR);
            }
            // Default to CHF for others
            else {
              setCurrencyData(CURRENCY_DATA.CHF);
            }
          }
        } catch (geoError) {
          // If geolocation fails, keep browser locale result or default to CHF
          console.debug('Geolocation detection failed, using browser locale or CHF');
        }
      } catch (error) {
        console.debug('Currency detection failed, defaulting to CHF', error);
        setCurrencyData(CURRENCY_DATA.CHF);
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const formatPrice = (priceInCHF: number): string => {
    const convertedPrice = Math.round(priceInCHF * currencyData.conversionRate);
    return `${currencyData.symbol} ${convertedPrice}`;
  };

  const formatDualPrice = (priceInCHF: number): string => {
    const eurPrice = Math.round(priceInCHF * CURRENCY_DATA.EUR.conversionRate);
    return `CHF ${priceInCHF} / € ${eurPrice}`;
  };

  const switchCurrency = (newCurrency: Currency) => {
    setCurrencyData(CURRENCY_DATA[newCurrency]);
  };

  return {
    currency: currencyData.currency,
    symbol: currencyData.symbol,
    formatPrice,
    formatDualPrice,
    switchCurrency,
    isLoading,
    conversionRate: currencyData.conversionRate
  };
};
