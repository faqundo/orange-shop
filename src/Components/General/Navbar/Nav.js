import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from 'react-router-dom';


//colores principales:#563d7c o #7F0C78 o  #C87DEA , #6610f2 , #6f42c1
//colores secundarios: #36bbac , #666 , 

var sectionStyle = {
    backgroundImage: `url(${fondoNav})`
}

function Nav(props) {

    return (
        <>
            <Navbar variant="dark" style={sectionStyle} expand="lg" className="mb-4">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
            </style>
                <Link to="/" className='navbar-brand'>

                    
                    <Navbar.Text className="ml-2" style={{ fontFamily: 'Cedarville Cursive', fontSize: "2rem" }}>
                        OrangeMarket
                    </Navbar.Text>

                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">

                        {!props.user

                            ?
                            <>
                                <Button
                                    style={{ backgroundColor: "#7F0C78" }}
                                    variant="primary"
                                    
                                    size="md"
                                >
                                    Ingresá
                                </Button>
                                <Nav.Link
                                    variant="primary"
                                    
                                    size="md"
                                >
                                    Creá tu cuenta
                                </Nav.Link>
                                <Link to={"/ayuda"} className="nav-link">
                                    ayuda
                                </Link>
                            </>
                            :
                            <>

                                <Link to={"/mispasajes"} className="nav-link">
                                    Mis pasajes
                                </Link>
                                <Link to={"/misdestinos"} className="nav-link">
                                    Mis destinos
                                </Link>


                                <NavDropdown alignRight title={props.user.nombre}>
                                    <NavDropdown.Item>
                                        <Link to="/mi-cuenta">Mi cuenta</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={props.handleLogout}>Cerrar sesion</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

                       

        </>

    );

}

export default Nav;