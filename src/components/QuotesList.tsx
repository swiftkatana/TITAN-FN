import React from 'react';
import QuoteComponent from './common/Quote';
import { Quote } from './common/Quote.interface';

type Props = {
  quotes: Quote[];
};

const QuotesList: React.FC<Props> = ({ quotes }) => (
  <ul>
    {quotes.map((quote) => (
      <QuoteComponent key={quote.id} quote={quote} />
    ))}
  </ul>
);

export default QuotesList;