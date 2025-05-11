import React from 'react';
import QuotesFetcher from './components/QuotesFetcher';

const App: React.FC = () => (
  <div className="App">
    <h1>Quotes Of the Day</h1>
    <QuotesFetcher />
  </div>
);

export default App;