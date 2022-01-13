import React,{useEffect} from 'react'
import QuoteList from '../src/components/quotes/QuoteList'
import useHttp from '../Hooks/use-Http';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../src/components/UI/LoadingSpinner';
import NoQuotesFound from '../src/components/quotes/NoQuotesFound';



// const QuoteDetail=[
//     {
//         id:'q1',
//         Author:'J.Chetan',
//         text:'He who Fears,Will Die'
//     },
//     {
//         id:'q2',
//         Author:'J.Chetan phani',
//         text:'When u fell like Quitting! Think about why u started'
//     },
//     {
//         id:'q3',
//         Author:'J.Chetan phanindra',
//         text:'Live Laugh Love!'
//     },
    
   
// ]

            const AllQuotes = () => {

                const{sendRequest,status,data: loaded,error}=useHttp(getAllQuotes,true);
                console.log(loaded);

                useEffect(() => 
                {
                sendRequest();
                }, [sendRequest])

                if(status=== 'pending')
                {
                    return <div>
                        <LoadingSpinner/>
                    </div>
                }
                if(error)
                {
                    return<p>{error}</p>
                }

                if(status === 'completed' && (!loaded || loaded.length ===0))
                {
                return <NoQuotesFound/>;
                }


                return (
                    <div>
                    <QuoteList quotes={loaded}/>
                    </div>
                )
            }

export default AllQuotes
