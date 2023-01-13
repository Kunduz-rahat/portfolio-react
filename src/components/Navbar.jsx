import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa';
import logo from '../assets/img/logo.svg';


export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
	return (
		<Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" 
							className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
							onClick={() => onUpdateActiveLink('home')}>
							Главное
							</Nav.Link>
              <Nav.Link href="#skills" 
							className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
							onClick={() => onUpdateActiveLink('skills')}>
							Навыки
							</Nav.Link>
              <Nav.Link href="#projects" 
							className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
							onClick={() => onUpdateActiveLink('projects')}>
							Проекты
							</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
							<a href='https://www.instagram.com/damskoeschacte/'>
            <AiFillInstagram />
            </a>
        <a href='https://www.linkedin.com/in/kunduz-rakhat-958139245/'>
        <AiFillLinkedin />
        </a>
            <a href='https://github.com/Kunduz-rahat'>
            <AiFillGithub/>
            </a>
            <a href='https://t.me/kunduz_rakhat'>
            <FaTelegramPlane/>
					
            </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Свяжитесь со мной</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
	)
}
