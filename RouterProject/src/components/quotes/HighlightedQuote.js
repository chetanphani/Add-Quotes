import classes from './HighlightedQuote.module.css';
import { useLocation } from 'react-router';

const HighlightedQuote = (props) => {
  console.log(props);
  // const history=useHistory();
  const location=useLocation();
  console.log(location);
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
 
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
