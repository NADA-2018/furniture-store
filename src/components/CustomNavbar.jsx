import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar(){
    return(
        <Navbar bg="dark" data-bs-theme="dark">

        <Container fluid>
          <Navbar.Brand href="#">furniture</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">shop</Nav.Link>
              <Nav.Link href="#action2">wishlist</Nav.Link>
  
              <NavDropdown title="collection" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">sofas</NavDropdown.Item>
                <NavDropdown.Item href="#action4">clocks </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> mirrors</NavDropdown.Item>
                <NavDropdown.Item href="#action6">chairs</NavDropdown.Item>
                <NavDropdown.Item href="#action7">pillows</NavDropdown.Item>
                <NavDropdown.Item href="#action8">tables</NavDropdown.Item>
                <NavDropdown.Item href="#action9">living rooms</NavDropdown.Item>
                <NavDropdown.Item href="#action10">bed rooms</NavDropdown.Item>
  
              </NavDropdown>
             
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    )
}
export default CustomNavbar;