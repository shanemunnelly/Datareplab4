import Books from "./Books";


// This is a Read function which 
function Read() { 
    // this is where we store all of the data for the information about the books we wish to display 
    const data = 
     [
{
"title": "Learn Git in a Month of Lunches",
"isbn": "1617292419",
"pageCount": 0,
"thumbnailUrl":
 "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
"status": "MEAP",
"authors": ["Rick Umali"],
"categories": []
},
{
"title": "MongoDB in Action, Second Edition",
"isbn": "1617291609",
"pageCount": 0,
"thumbnailUrl":
"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg","status": "MEAP",
"authors": [
"Kyle Banker ",
"Peter Bakkum ",
"Tim Hawkins ",
"Shaun Verch ",
"Douglas Garrett "
],
"categories": []
},
{
    "title": "Getting MEAN with Mongo, Express, Angular, and Node",
    "isbn": "1617292036",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg","status": "MEAP",
    "authors": ["Simon Holmes"],
    "categories": []
    }
    ]
    

    
    return(
        <div> 
            <h2> read</h2>
<Books myBooks={data}> </Books>

</div>
);
}
export default Read;