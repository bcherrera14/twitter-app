import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Link className="navbar-brand" to="/">
				Daily Tweets
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link className="nav-link" to="/tweet/favorites">
						Trending
					</Link>
					<Link className="nav-link" to="/tweet/search">
						Search
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
