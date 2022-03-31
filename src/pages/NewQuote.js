import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)
    // Programtic navigation
    // Push user can go back to prevous page
    // Replace user can't go back
    history.push('/quotes');
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />
};

export default NewQuote;