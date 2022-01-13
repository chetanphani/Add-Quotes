import { useRef } from 'react';

import classes from './NewCommentForm.module.css';
import useHttp from '../../../Hooks/use-Http';
import { addComment } from '../../../lib/api';


const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const {sendRequest,data,error,status}=useHttp(addComment)

  const submitFormHandler = (event) => {
    event.preventDefault();

    const inpput=commentTextRef.current.value;

    sendRequest({Enteredinput:inpput});

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
