import { Route,Switch,Redirect } from "react-router-dom";
import React,{Suspense} from "react";
// import AllQuotes from "../Pages/AllQuotes";
// import AddQuotes from "../Pages/AddQuotes";
import NotFound from "../Pages/NotFound";
import QuoteDetails from "../Pages/QuoteDetails";
import Layout from "./components/layout/Layout";


//implementing lazy loading
const  AllQuotes = React.lazy(()=>import('../Pages/AllQuotes'))
const AddQuotes = React.lazy(()=>import('../Pages/AddQuotes'))
function App() {
  return (
    <div>
     <Layout>
     <Suspense  fallback={
       <div>
         <h1>Page is loading....</h1>
       </div>
     }>
        <Switch>
           <Route path='/' exact>
           <Redirect to='/quotes'/>
           </Route>

            <Route path='/quotes' exact>
            <AllQuotes/>
            </Route>

            <Route path='/quotes/:quoteId'> 
              <QuoteDetails/>
            </Route>

              <Route path='/new-quote'>
              <AddQuotes/>
              </Route>
              
              <Route path='*'>
               <NotFound/>
              </Route>
        </Switch>
        </Suspense>
      </Layout>
    

    </div>
  );
}

export default App;
