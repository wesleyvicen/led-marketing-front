import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navbar2 extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Anúncio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Listar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                listar tudo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Remover</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Notícia" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Listar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                listar tudo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Remover</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Usuários" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Listar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                listar tudo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Remover</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavDropdown title="Wesley" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Informações</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Editar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar2;
