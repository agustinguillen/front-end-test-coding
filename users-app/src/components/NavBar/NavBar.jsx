import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const handleScroll = ()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Navbar bg="dark">
      <Container>
        <Link to="/" className="link" onClick={() => handleScroll()}>
          <Navbar.Brand style={{color:'white'}}>
            <FaHome size={23} className="mb-2" />
            <span className="mx-2">Users App</span>
          </Navbar.Brand>
        </Link>
        <div>
          <a href="https://github.com/agustinguillen" target="_blank" rel="noreferrer">
            <FaGithub className="mx-3" size={23} />
          </a>
          <a href="https://www.linkedin.com/in/agustin-nicolas-guillen/" target="_blank" rel="noreferrer">
            <FaLinkedin size={23} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
