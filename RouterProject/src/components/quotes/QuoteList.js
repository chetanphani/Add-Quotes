import { Fragment } from 'react';
import { useHistory,useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  //ude history is use to navigate ie:backward or farwrd betwweenn tha pages
  const history=useHistory();
  //Use location is used to get the location Of the page
  const location=useLocation();
  // console.log(location);

  const queryparms=new URLSearchParams(location.search);
  const SortAssending=queryparms.get('sort') ==='asc';

  const Sorted=sortQuotes(props.quotes, SortAssending);

  const SortingOrder=()=>
  {
      history.replace('/quotes?sort=' + (SortAssending==true?'desc' : 'asc'));
  }
  return (
    <Fragment>
    <div className={classes.sorting}>
      <button onClick={SortingOrder}>Sort {SortAssending==true? 'Descending' : 'Asscending'}</button>
    </div>
      <ul className={classes.list}>
        {Sorted.map((quote) => {
           return <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.Author}
            text={quote.text}
          />
        }
        )}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
