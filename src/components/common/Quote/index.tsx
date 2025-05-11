import React from 'react';
import './QuoteComponent.css';
import { Quote } from '../Quote.interface';


type Props = {
 quote: Quote;
};

const QuoteComponent: React.FC<Props> = ({ quote }) => (
 <li className="quote">
  <blockquote>"{quote.body}"</blockquote>
  <p className="quote-author">
   - <a href={`https://favqs.com/authors/${quote.author_permalink}`} target="_blank" rel="noreferrer">
    {quote.author}
   </a>
  </p>
  <p className="quote-tags">Tags: {quote.tags.join(', ')}</p>
  <p className="quote-metrics">
   ♥ {quote.favorites_count} | ⬆ {quote.upvotes_count} | ⬇ {quote.downvotes_count}
  </p>
 </li>
);

export default QuoteComponent;