import Item from "./Item";
// this function is called in read to take the information from it and pass it to items
function Books(props) {
    return props.myBooks.map(
        (book)=>{  
            return <Item mybook={book} key={book.isbn} ></Item>
        }
            
    )

        
    
}
export default Books;