import { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";


// This is a Read function which 
function Read() { 
    // this is where we store all of the data for the information about the books we wish to display 
const [data, setData] = useState([]); 
// use effect allows you to synchronise a component with an external system in this case it adds a user input to the link in the axios line
useEffect(()=>{
    // axios allows for the page to display the information from the link in this line
axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
.then(
    // the reposne takes the data from the website and extraces it so the books.js and item.js can use the values.
    (response) => {
        setData(response.data.books);
    }
)
// catch allows for any errors to be logged in the console so you can see what changes have to be made in future we might use the throw method to move these errors to a differnt file so we can log the changes better 
.catch(
    (error)=>{ 
        console.log(error);
    }
);

}, [])
    
    return(
        <div> 
{/* here is where we take the data from books.js to display in here using the data constant  */}
<Books myBooks={data}> </Books>

</div>
);
}
export default Read;