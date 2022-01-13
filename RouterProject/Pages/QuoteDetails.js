import React,{useEffect} from 'react'
import { Route, useParams,useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import Comments from '../src/components/comments/Comments';
import HighlightedQuote from '../src/components/quotes/HighlightedQuote';
import useHttp from '../Hooks/use-Http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../src/components/UI/LoadingSpinner';

// const QuoteloadData=[
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


const QuoteloadDatas = () => {

    const {sendRequest,status,data:loadData,error}=useHttp(getSingleQuote,true);
    console.log(loadData);
    const match=useRouteMatch()
    console.log(match);
    const params=useParams();
  const { quoteId }=params

    useEffect(() => {
        sendRequest(quoteId);
        }
    , [sendRequest,quoteId])



    if(status === 'pending')
    {
        <LoadingSpinner/>
    }
    
    
            // const loadData=loadData.find((val)=>
            // {
            //     return val.id === params.quoteId
            // })

            if(!loadData)
            {
                return <p>'No Quote Found'</p>
            }
    return (
        <div>
       <HighlightedQuote text={loadData.text} author={loadData.author}/>
       
           {/* //conditioal rendering is we are doing below */}
       {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
       <Route path={`${match.path}`} exact>
       <div>
       {/* <Link to={`/quotes/${params.quoteId}/comments`} style={{textDecoration:'none'}}>Load Comments</Link>   we can u se this or we can use the below way using routerMatch */}
       <Link to={`${match.url}/comments`} style={{textDecoration:'none'}}>Load Comments</Link> 
       </div>
       </Route>
       
        {/* <h2>{params.quoteId}</h2> */}
       
        {/* <Route path={`/quotes/${params.quoteId}/comments`} we can u se this or we can use the below way using routerMatch> */}
        <Route path={`${match.path}/comments`}>
           <Comments/>
        </Route>
            
        </div>
    )
}

export default QuoteloadDatas
