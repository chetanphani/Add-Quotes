import React,{useEffect} from 'react'
import { useHistory,useRouteMatch } from 'react-router';
import QuoteForm from '../src/components/quotes/QuoteForm'
import useHttp from '../Hooks/use-Http';
import { addQuote } from '../lib/api';

const AddQuotes = () => {

   const {sendRequest,status} = useHttp(addQuote)
    const history=useHistory();
   const match= useRouteMatch()
   console.log(match);

   useEffect(() => {
    if(status=== 'completed')
    {
        history.push('./quotes')
    }
       
   }, [status,history])

   
    const AddQuotes=(data)=>
        {
            console.log(data);
            sendRequest(data)
            // history.replace('/quotes');

           
        }
    return (
        <div>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={AddQuotes}/>
            
        </div>
    )
}

export default AddQuotes
