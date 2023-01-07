import "./Navbar.css"
import logo from "../componentes/home/et/logo.jpg"

import React from 'react'
import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <NavbarBs className='nabvar' >
        <img src={logo} className="logo" alt="..." />
        <Container className="container-navbar">
            <Nav>
                <NavLink className="home" to="/" as={NavLink}>
                    HOME 
                </NavLink> 
            </Nav>
            <Nav>
                <NavLink className="portafolio-navbar" to="/portafolio" as={NavLink}>
                    PORTAFOLIO
                </NavLink>
            </Nav>
            <Nav>
                <NavLink className="galeria" to="/galeria"  >
                    GALERIA
                </NavLink>
            </Nav>
        </Container>
    </NavbarBs>
  )
}
