import React, {Component} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class SignUp extends Component {

  constructor(props) {
    super(props)

    this.done = this.done.bind(this)
  }

  done() {
    this.props.history.push('/')
  }
  render() {
    return (<div>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand onClick = {this.done}>180Crypto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Prices">Prices</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      <Container className="passwordCard">

        <Row className="mx-auto">
          <Col className="mx-auto">
            <Card className="mx-auto" border="primary" style={{
                width: '35rem'
              }}>
              <Card.Header>Create your account</Card.Header>
              <Card.Body>
                < Form >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>

                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={this.done}>
                    Creat account
                  </Button>
                  < /Form></Card.Body>
                </Card>
                <br/>
              </Col>
            </Row>
          </Container>

        </div>);
  }
}

export default SignUp
