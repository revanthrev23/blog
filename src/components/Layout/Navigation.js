import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

 
const Navigation = () => {
    return (
        // <nav className="col-md-2">
        // 	<ul>
		// 		<li><div className="sidebar_item"><Link to={'/'}>List All Posts </Link></div></li>
        //         <li><div className="sidebar_item">   </div></li>
        //     	<li><div className="sidebar_item" ><Link to={'/create'}> Add New Post</Link></div></li>
        //     </ul>
        // </nav>
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link><Link to={'/'}>List All Posts </Link></Nav.Link>
        <Nav.Link><Link to={'/create'}> Add New Post</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Navigation;