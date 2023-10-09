import Item from "./Item";
// this function is called in read to take the information from it and pass it to items
function Books(props) {
    return props.myBooks.map(
        (book)=>{  
            // key refers to giving each set of data a unique identifier in case the database would increase in size in the future 
            return <Item mybook={book} key={book.isbn} ></Item>
        }
            
    )

        
    
}
export default Books;