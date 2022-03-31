import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuoute from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'learning react'},
  {id: 'q2', author: 'Alex', text: 'learning JS'},
];

const QuoteDetail = () => {
  const match = useRouteMatch(); 
  // match.path = "/quotes/:quoteId"
  // match.url  = "/quotes/q2" (exemple)
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuoute text={quote.text} author={quote.author}/>
      {/* Conditional render section, display section if exact route matched */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="'btn--flat">Load Comments</Link>
        </div>
      </Route>
      {/* <Route path="/quotes/:quoteId/comments"> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
