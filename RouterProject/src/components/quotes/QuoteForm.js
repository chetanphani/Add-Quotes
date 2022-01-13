import { useRef,useState } from 'react';
import { Prompt } from 'react-router';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    
  
    
    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  
  const FormFocusHandler=()=>
  {
     setisEditing(true);
  }
  // const Btnclick=()=>
  // {
  //   setisEditing(false)
  // }

  return (
    <>
    <Prompt when={isEditing} message={(location)=>'Ur data is not saved,data will be lost'}/>
    <Card>
      <form onFocus={FormFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={()=>setisEditing(false)} >Add Quote</button>
        </div>
      </form>
    </Card>
    </>
  );
};

export default QuoteForm;
