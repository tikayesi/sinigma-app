import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Navbar dark color="primary" className="shadow mb-4">
          <NavbarBrand href="/" className="mr-auto">SINIGMA</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 d-block d-sm-none" />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/customers" className="nav-link">Customers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products" className="nav-link">Products</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Header;
