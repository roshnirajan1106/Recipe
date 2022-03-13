Start the react app
-npm start
1. Page vs component - page is a full window screen and component is a part of a page

Download react-router
1. npm i react-router-dom@5.1

React-router-dom syntax -  BASIC ONE 
<!-- function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <switch>
        
      </switch>
    </BrowserRouter>
    </div>
  );
} -->
1. Inside switch we need to paste our routes to diffrent pages.
2. Switch enables only one route at a time

3. A single route syntax
<!-- <Route  exact path="/">
          <Home />
        </Route> -->
4. how to go to a particular page with the help of an id
    - Make use of useParams() hook
    - Extract the id
    - const  {id} = useParams
    - Attach it with the url and done
    - You'll get the required data
5. Making a post request
   1. first create the options for making the post request , things needed are header,body, and method.
   2. header - to tell what type of data, body - has the actual data
   3. create this inside useState , and pass this is as an argument to fetch function using spread operator.
   4. so whenEver we want to make a post req theres a need for options (body,method etc)
   5. so make a diffrent function which will set this options in the useState and invoke the fetch data function
6. How to redirect the user.
   1. See an appropriate place to call the hook, dont call it near asynchronus functions
   2. make use of useHistory hook inside react-router-dom
   3. const history = useHistory();
   4. then push "/" inside history to redirect it.

7. How to get the query parameter
   1. Make use of useLocation hook
   2. const querystring = useLocation().search -> "?q=pie"
   3. take out the question mark 
   4. const queryParams = new URLSearchParams(querystring)
   5. const query = queryParams.get('q');
<!-- CONTEXT API
<h1> </hr>
 <h1>CONTEXT API<h1>
  <img src="https://user-images.githubusercontent.com/56948080/157485614-947c001f-584c-4663-96e7-ce6d6ec41828.png" /> -->

1. https://dmitripavlutin.com/react-context-and-usecontext/
2. 

