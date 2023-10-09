// This are all the imports for the App
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './Components/Content'
import Container from 'react-bootstrap/Container';
import Read from './Components/Read'
import Create from './Components/create'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     {/* Here is the nav bar this live sets the background and text colour for the boxes */}
      <Navbar bg="primary" data-bs-theme="dark">
        {/* this is a container to hold the links to the different componets we are linking */}
        <Container>
          <Nav className="me-auto">
            {/* the different components linked */}
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/Read">Read </Nav.Link>
            <Nav.Link href="/create">Create </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* These are the routes which leads to the componets called in the Nav Bar */}
      {/* This one leads to Content which has the time and hello world */}
      <Routes> 
      <Route path='/' element= {<Content> </Content>}> </Route>
      </Routes>
      {/* This one leads to Read component */}

    <Routes> 
    <Route path='/Read' element= {<Read> </Read>}> </Route>
    </Routes>
      {/* This one leads to create component */}

    <Routes> 
    <Route path='/create' element= {<Create> </Create>}> </Route>
    </Routes>

    
    </div>
    </BrowserRouter>
  );
}


export default App;
