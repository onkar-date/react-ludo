import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className='p-2'>
      <Navbar.Brand href="#home">Ludo</Navbar.Brand>
    </Navbar>
  )
}

export default Header