

// This is a content function which can say the current time for the app
function Content() { 
    return(
        <div> 
<h1> Hello World </h1>  
<h2>   It is {new Date().toLocaleTimeString()}.     </h2>
</div>
);
}
export default Content;