import { Navbar, Nav } from 'react-bootstrap';

var data =
    [
        { key: 1, value: 'About' },
        { key: 2, value: 'Resume' },
        { key: 3, value: 'Projects' },
        { key: 4, value: 'Contact' }
    ];
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="black">
            <Navbar.Brand href="/" className="nav-header">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    {data.map((e) => (
                         
                        <Nav.Link key={e.key} href={e.value}>{e.value}</Nav.Link>
                    ))}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
