import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./Header.scss";
import logo from "../../assets/images/logo.png";

export const Header: React.FC = () => {
    const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const toggleMenu = () => setMenuExpanded(!menuExpanded);

    let navbarClass = `fixed-top ${scrollPosition === 0 ? "" : "scrolled"}`;

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <header id="header">
            <Container>
                <Navbar collapseOnSelect className={navbarClass} expand="md" expanded={menuExpanded}>
                    <Navbar.Brand>
                        <div id="logo">
                            <Link className="nav-link" to="/#home">
                                <img src={logo} alt="logo" className="app-logo" />
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-menu">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                            <Link className="nav-link" to="/portfolio">
                                Portfolio
                            </Link>
                            <Link className="nav-link" to="/resume">
                                Resume
                            </Link>
                            <Link className="nav-link" to="/education">
                                Education
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <nav id="nav-menu-container">
                    <ul className="nav-menu"></ul>
                </nav>
            </Container>
        </header>
    );
};
