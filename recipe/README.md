function of useRef : 
1. Focussing on the input
2. if we want to focus on a particular input feild then make use of useRef feild
3. const inputIng = useRef(null)
4. go to that input feild and add a prop , ref={inputIng}
5. Now inputIng has full control over that input value
6. now use focus method on it
7. inputIng.current.focus()
   --------------------
1. .trim() function removes whitespaces
2. const ing=newIngredients.trim(); //removes whitespace - example
3. !ingredients.includes(ing) - find function
------------------------------------------
Making a post request
1. const useFetch = (url ,method = "GET") 
2. Here method ="GET" is by-default 
3. we can manually pass any argument
--------------------------------------------
1. Make a postdata function = takes argument the data , and invoked in create.js 
2. const postData = (postData) => {
      setOptions({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          //type of data- > json data
        },
        body: JSON.stringify(postData)
      })
    }
3. here we're setting options such as method->post, headers-> datatype , body- >the data we're getting is in the form of json we should stringyfy it coz we're sending it to our database
4. this options are necessary inside fetch function to make a post request
---------------------------------------------
5. How to redirect
6. import useHistory hook
7. const history = useHistory()
8. then history.push("/");
9. this redirects the page to home page
   -------------------------------------------
1. useLocation() = is used to get the queryString
2. to get the actual querystring we make use of 
const queryParams = new URLSearchParams(queryString); this is javascript
3. then to get the actual query we make use of get function
const queryString = useLocation().search; //? 
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url ="http://localhost:8000/recipes?q=" + query;
