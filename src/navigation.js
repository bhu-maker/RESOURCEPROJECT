import {Container,Navbar,Nav} from 'react-bootstrap'
export const Navigation=()=>
{ return(
    <>
    <Navbar bg="danger" expand="lg">
  <Container>
    <Navbar.Brand href="#home">RESOURCE RECRUITE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/new">Recruite</Nav.Link>
        <Nav.Link href="/short">Shortlist</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
)
}