import React, { Component, Fragment } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <Nav vertical pills>
          <NavItem>
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/home/customers" className="nav-link">Customers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/home/products" className="nav-link">Products</NavLink>
          </NavItem>
        </Nav>
      </Fragment>
    );
  }
}

export default Sidebar;
