import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import Routers from '../routes/Routers';

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
            <Routers />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default TwoColumnsLayout;
