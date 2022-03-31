import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'learning react'},
  {id: 'q2', author: 'Alex', text: 'learning JS'},
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;