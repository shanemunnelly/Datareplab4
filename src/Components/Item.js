import Card from 'react-bootstrap/Card';

function Item(props) {
return (
    <div class="container" > 
        {/* using bootstrap we add a card to make the data be represented more cleanly  */}
        <Card style={{ width: '20rem' }}>
            {/* this is the cover image called from the read.js component using the books.js component */}
        <Card.Img src={props.mybook.thumbnailUrl}/>
         <Card.Body>
                        {/* this is the Book title called from the read.js component using the books.js component */}

        <Card.Title> {props.mybook.title}  </Card.Title> 
                    {/* this is the author name(s) called from the read.js component using the books.js component */}

        <Card.Text> Author  {props.mybook.authors}   </Card.Text>
        </Card.Body>
        </Card>
        </div>
);

}
  
 



export default Item;