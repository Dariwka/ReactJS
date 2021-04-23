import React, { Component } from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://source.unsplash.com/800x450/?meal,recipes" />
                  <p>
                    sbndfgsdjgnsdgkjsdngggggggggggggggggggggggggggggggggggggggggsdkmgsdgksdgksdlgnjsedgknmsdkgnmsdkmnggggggx,dcfgvsdfgmndskfgmdskfgmdksmfgkdsmfgkdsmfgkdmskfgmdskgmdskmgkdsmgksdgmsdkmgsdekjgmlkjmgflksgmedkmgfkdemgk
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://source.unsplash.com/800x450/?fruits" />
                  <p>
                    sbndfgsdjgnsdgkjsdngggggggggggggggggggggggggggggggggggggggggsdkmgsdgksdgksdlgnjsedgknmsdkgnmsdkmnggggggx,dcfgvsdfgmndskfgmdskfgmdksmfgkdsmfgkdsmfgkdmskfgmdskgmdskmgkdsmgksdgmsdkmgsdekjgmlkjmgflksgmedkmgfkdemgk
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://source.unsplash.com/800x450/?fastfood" />
                  <p>
                    sbndfgsdjgnsdgkjsdngggggggggggggggggggggggggggggggggggggggggsdkmgsdgksdgksdlgnjsedgknmsdkgnmsdkmnggggggx,dcfgvsdfgmndskfgmdskfgmdksmfgkdsmfgkdsmfgkdmskfgmdskgmdskmgkdsmgksdgmsdkmgsdekjgmlkjmgflksgmedkmgfkdemgk
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://source.unsplash.com/800x450/?pizza" />
                  <p>
                    sbndfgsdjgnsdgkjsdngggggggggggggggggggggggggggggggggggggggggsdkmgsdgksdgksdlgnjsedgknmsdkgnmsdkmnggggggx,dcfgvsdfgmndskfgmdskfgmdksmfgkdsmfgkdsmfgkdmskfgmdskgmdskmgkdsmgksdgmsdkmgsdekjgmlkjmgflksgmedkmgfkdemgk
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://source.unsplash.com/800x450/?cooking" />
                  <p>
                    sbndfgsdjgnsdgkjsdngggggggggggggggggggggggggggggggggggggggggsdkmgsdgksdgksdlgnjsedgknmsdkgnmsdkmnggggggx,dcfgvsdfgmndskfgmdskfgmdksmfgkdsmfgkdsmfgkdmskfgmdskgmdskmgkdsmgksdgmsdkmgsdekjgmlkjmgflksgmedkmgfkdemgk
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default About;
