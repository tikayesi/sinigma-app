import React, {Component, Fragment} from 'react';
import {Col, Row} from 'reactstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import {Outlet} from "react-router-dom";

class TwoColumnsLayout extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="12" className="p-0">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col sm="4" md="3" lg="2" className="d-none d-sm-block">
            <Sidebar />
          </Col>
          <Col sm="8" md="9" lg="10">
            <Outlet />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default TwoColumnsLayout;
