import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const handleClick = () => {
    console.log('registered click');
}

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href="/" onClick={handleClick}>The Goan Traveller</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5 gap-3 mr-5">
                        <Nav.Link href="/listblogs">Blog</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown" className='mr-3'>
                            <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;