import React, { useState } from 'react';
import QuotesList from './QuotesList';
import { Quote } from './common/Quote.interface';

const QuotesFetcher: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [tag, setTag] = useState<string>('');
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchQuotes = async (): Promise<void> => {
    if (count < 1 || count > 50) {
      alert('Please enter a number between 1 and 50');
      return;
    }
    setLoading(true);
    try {
      const query = new URLSearchParams({ count: count.toString(), ...(tag && { tag }) });
      const res = await fetch(`http://localhost:3002/quotes?${query.toString()}`);
      if (!res.ok) throw new Error(res.statusText);
      const data: Quote[] = await res.json();
      setQuotes(data);
    } catch (e) {
      console.error('Frontend error:', e);
      alert((e as Error).message || 'Failed to fetch quotes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        min={1}
        max={50}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Optional tag (e.g. life)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button onClick={fetchQuotes} disabled={loading}>
        {loading ? 'Loading...' : 'Get Quotes'}
      </button>
      <QuotesList quotes={quotes} />
    </div>
  );
};

export default QuotesFetcher;