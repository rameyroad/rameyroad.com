import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import { scrollToTop } from "../../services/apiClient";

import logo from "../../assets/images/logo.png";

import "./Header.scss";

export const Header: React.FC = () => {
    const location = useLocation();

    const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const toggleMenu = () => setMenuExpanded(!menuExpanded);

    let navbarclassName = `${location?.pathname === "/" && scrollPosition === 0 ? "" : "header-scrolled"}`;

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    useEffect(() => {
        if (location?.pathname) {
            scrollToTop();
        }
    }, [location.pathname]);

    return (
        <header id="header" className={navbarclassName}>
            <Container>
                <Navbar collapseOnSelect className="fixed-top" expand="lg" expanded={menuExpanded} variant="dark">
                    <Navbar.Brand>
                        <div id="nav_logo">
                            <Link className="nav-link" to="/#home" onClick={toggleMenu}>
                                <img src={logo} alt="logo" className="app-logo" />
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-menu">
                            <Link className="nav-link" to="/" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link className="nav-link" to="/portfolio" onClick={toggleMenu}>
                                Portfolio
                            </Link>
                            <Link className="nav-link" to="/resume" onClick={toggleMenu}>
                                Resume
                            </Link>
                            <Link className="nav-link" to="/education" onClick={toggleMenu}>
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
