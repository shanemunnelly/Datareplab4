import { useState } from "react";


// This is a Read function which 
function Create() { 
    // These are the constatnts for the creation 
    const[Title, setTitle] = useState('Title'); 
    const[Cover, setCover] = useState('Cover'); 
    const [Author, setAuthor] = useState('Author'); 
    // this allows for the form to take user input to add the user input
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("title "+ Title + " Cover " + Cover + " Author " + Author);
    }
    return(
        <div> 
        
<h2> Hello from create Component ! </h2>  
{/* This is the form for the user input */}
<form onSubmit={handleSubmit}> 
{/* This is for the title which takese users input the label is the default text in the text box i decided to make the class name blank as the textbox fills ths whole screen
the On change sets the title which was entered into the textbox as the user input this is the same of the next 2 div's but for cover and author */}
        <div className="form-group"> 
            <label>  Add Book Title:  </label>
            <input type="text"
                    className=""
                    value={Title}
                    onChange={(e) => {setTitle(e.target.value)} }
                    />   
        </div>
        <div className="form-group"> 
            <label>  Add Book Cover:  </label>
            <input type="text"
                    className=""
                    value={Cover}
                    onChange={(e) => {setCover(e.target.value)} }
                    />   
        </div>
        <div className="form-group"> 
            <label>  Add Book Author:   </label>
            <input type="text"
                    className=" "
                    value={Author}
                    onChange={(e) => {setAuthor(e.target.value)} }
                    />   
        </div>
        {/* This is how you submit the userdata using a button. */}
        <div className="form-group"> 
        <input 
        type="submit"
        value="Create Book"> 
        </input>
        
        </div>
</form>
</div>
);
}
export default Create;