import { Navbar, Nav } from 'react-bootstrap';

var data =
    [
        { key: 1, value: 'About' },
        { key: 2, value: 'Resume' },
        { key: 3, value: 'Projects' },
        { key: 4, value: 'Contact' }
    ];

function onRouteClick(e) {
    data.forEach(x => {
        if (e && e.target && e.target.innerText == x.value) {
            var ele = document.getElementById(x.value);
            ele.classList.add('navbaractive')

        }
    })
    console.log(e.target.innerText);

}

function Header(props) {
    const { location } = props;
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="black">
            <Navbar.Brand href="/" className="nav-header">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav activeKey={location.pathname}>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Skills">Skills</Nav.Link>
                    <Nav.Link href="/Resume">Resume</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    {/* {data.map((e) => (

                    <Nav.Link key={e.key} id={e.value} href={e.value} >{e.value}</Nav.Link>
                ))} */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
