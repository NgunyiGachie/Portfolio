import { useState, useEffect } from 'react';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import anto3 from '../assets/img/anto3.png';
import resume from '../assets/resume-sample.pdf'; 

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
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf'; 
        link.click();
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={anto3} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text ms-auto">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://web.facebook.com/profile.php?id=100006387900157" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                            <a href="https://www.instagram.com/gachiengunyi/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <button className="vvd" onClick={handleDownloadResume}><span>Download My Resume</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
