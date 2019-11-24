import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import {Line} from 'react-chartjs-2';
import axios from 'axios';
import FooterPage from './FooterPage';
import News from './News';



=======
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import {Line} from 'react-chartjs-2';
import News from './News'
import axios from 'axios'
>>>>>>> master

const options = {
  maintainAspectRatio: true,
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
<<<<<<< HEAD
          labelString: 'Price ($)'
=======
          labelString: 'PriceUSD($)'
>>>>>>> master
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
<<<<<<< HEAD
          labelString: 'Time (Days)'
=======
          labelString: 'Time(Days)'
>>>>>>> master
        }
      }
    ]
  }
}

class Cryptocurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyname: '',
      display_data: {},
      raw_data: {},
      imageurl: '',
      urlsymbol: '',
      graphdata: [],
      data: [],
<<<<<<< HEAD
      about: [],
=======
>>>>>>> master
      numCoins: '',
      output: '',
      numMoney: '',
      output2: ''
    }
    this.done = this.done.bind(this)
<<<<<<< HEAD
    this.numCoins = React.createRef();
    this.numMoney = React.createRef();
=======
>>>>>>> master

  }

  componentDidMount() {
    window.scrollTo(0, 0)

    const currencynameparam = this.props.location.state.currencyname;
    const display_data = this.props.location.state.currecy_display_data;
    const raw_data = this.props.location.state.currency_raw_data;
    const imageurlparam = this.props.location.state.imageurl;
    const urlsymbol = this.props.location.state.urlsymbol;
<<<<<<< HEAD
    console.log(urlsymbol)

    this.getMeta(urlsymbol);
=======
>>>>>>> master

    axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + urlsymbol + "&tsym=USD&limit=10").then(res => {
      var y_list = [];
      const response = res['data']['Data']['Data'];
<<<<<<< HEAD
      console.log(response)
=======

>>>>>>> master
      this.setState({graphdata: response});

      for (let value in this.state.graphdata) {
        y_list.push(this.state.graphdata[value]['close'])
      }
      var fetch_data = {
        labels: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        datasets: [
          {
            label: 'Price over last 10 days',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
<<<<<<< HEAD
            borderColor: 'rgba(0,123,255,1)',
=======
            borderColor: 'rgba(75,192,192,1)',
>>>>>>> master
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: y_list
          }
        ]
      };
      this.setState({data: fetch_data});
<<<<<<< HEAD
      console.log(this.state.data)
=======
>>>>>>> master
    })

    this.setState({currencyname: currencynameparam, display_data: display_data, raw_data: raw_data, imageurl: imageurlparam});
  }
  done() {
    this.props.history.push('/')
  }
<<<<<<< HEAD

  getMeta(coin) {
    axios.get("https://api.nomics.com/v1/currencies?key=026073210569d2c64ca3a1ccd5d87873&ids=" + coin + "&attributes=website_url,description,whitepaper_url").then(res => {
      const about = res['data'];
      console.log(about)
      this.setState({about: about});
    })

  }
  handleChange() {

    this.setState({numCoins: this.numCoins.current.value})
    const val = this.state.raw_data['PRICE'] * Number(this.numCoins.current.value)
    this.setState({output: val})
  }
  handleChange2() {

    this.setState({numMoney: this.numMoney.current.value})
    const val = Number(this.numMoney.current.value) / this.state.raw_data['PRICE']
=======
  handleChange(e) {



    const numCoins = (e.target.validity.valid) ? e.target.value : this.state.numCoins;
    this.setState({numCoins: numCoins})

    const val = this.state.raw_data['PRICE'] * numCoins
    this.setState({output: val})
  }
  handleChange2(e) {

    const numMoney = (e.target.validity.valid) ? e.target.value : this.state.numCoins;
    this.setState({numMoney: numMoney})

    const val = numMoney / this.state.raw_data['PRICE']
>>>>>>> master
    this.setState({output2: val})
  }

  render() {

    return (<div id="parent">

      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand onClick={this.done}>180Crypto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Prices">Prices</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
          </Nav>
          <ButtonToolbar>

            <Dropdown className="mr-auto">

              <Dropdown.Toggle>
                <Button variant="primary">
                  <i class="far fa-user-circle"></i>
                </Button>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item as="button" onClick={this.changePassword}>Change Password</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </ButtonToolbar>
        </Container>
      </Navbar>

      <Container>

        <Row>
          <div className="cryptoCard pt-4">
            <Col className="ml-auto">

              <Card className="mx-auto" style={{
                  width: '22rem'
                }}>
                <Card.Img className="coinImage p-2" variant="top" src={"https://www.cryptocompare.com" + this.state.imageurl}/>
                <Card.Title className="mr-auto pl-3">
                  <span style={{
                      fontWeight: "bold",
                      fontSize: 25
                    }}>{this.state.currencyname}{"\n"}
                  </span>
                  <span style={{
                      color: 'gray',
                      fontSize: 18
                    }}>
                    {this.state.display_data['FROMSYMBOL']}</span>
                </Card.Title>
                <Card.Body>

                  <ListGroup>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 18
                        }}>Current Price:{"\n"}
                      </span>
                      <span style={{
                          fontWeight: "bold",
                          fontSize: 16
                        }}>
                        {this.state.display_data['PRICE']}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 18
                        }}>Daily High:{"\n"}
                      </span>
                      <span style={{
                          fontWeight: "bold",
                          fontSize: 16
                        }}>
                        {this.state.display_data['HIGHDAY']}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 18
                        }}>Daily Low:{"\n"}
                      </span>

                      <span style={{
                          fontWeight: "bold",
                          fontSize: 16
                        }}>
                        {this.state.display_data['LOWDAY']}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 18
                        }}>24 Hour Change:{"\n"}
                      </span>
                      <span style={{
                          fontWeight: "bold",
                          fontSize: 16
                        }}>
                        {this.state.display_data['CHANGE24HOUR']}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 18
                        }}>1 Hour Change:{"\n"}
                      </span>
                      <span style={{
                          fontWeight: "bold",
                          fontSize: 16
                        }}>
                        {this.state.display_data['CHANGEHOUR']}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 18
                        }}>24 Hour Percent Change:{"\n"}
                      </span>
                      <span style={{
                          fontWeight: "bold",
                          fontSize: 16
                        }}>
                        {this.state.display_data['CHANGEPCT24HOUR']}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span style={{
                          color: 'gray',
                          fontSize: 18
                        }}>1 Hour Percent Change:{"\n"}
                      </span>
                      <span style={{
                          fontWeight: "bold",
                          fontSize: 16
                        }}>
                        {this.state.display_data['CHANGEPCTHOUR']}</span>
                    </ListGroup.Item>
                  </ListGroup>

                </Card.Body>

              </Card>

            </Col>
          </div>

          <div className="m-auto pt-4">

            <Col>
              <Card style={{
                  width: '45rem'
                }}>
                <Card.Body>
<<<<<<< HEAD
                  <Card.Title>{this.state.currencyname} Chart</Card.Title>
=======
                  <Card.Title>Price Graph of {this.state.currencyname}</Card.Title>
>>>>>>> master
                  <Line data={this.state.data} options={options}/>
                </Card.Body>
              </Card>
            </Col>
          </div>

          <div className="mr-auto pt-2 ">

            <Col>
              <Card style={{
                  width: '22rem',
                }}>
                <Card.Header>Convert</Card.Header>
                <Card.Body>
                  <Card.Title>Convert {this.state.currencyname}
                    {"\n"}
                    & USD</Card.Title>
                  <Form>
                    <Form.Label>How many coins do you have?</Form.Label>
                    <InputGroup >
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                      </InputGroup.Prepend>
<<<<<<< HEAD
                      <Form.Control type="text" placeholder="coins" ref={this.numCoins} onChange={e => this.handleChange(e)}/>
=======
                      <Form.Control type="text" pattern="[0-9]*" placeholder="coins" value={this.state.numCoins} onChange={e => this.handleChange(e)}/>
>>>>>>> master

                    </InputGroup>
                    <Button variant="light">
                      $
                      <Badge variant="light">{this.state.output}</Badge>
                    </Button>
                  </Form>
                  <Form>

                    <Form.Label>How much $ do you have?</Form.Label>
                    <InputGroup >
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                      </InputGroup.Prepend>
<<<<<<< HEAD
                      <Form.Control type="text" placeholder="USD" ref={this.numMoney} onChange={e => this.handleChange2(e)}/>
=======
                      <Form.Control input type="tel" pattern="[0-9]*" placeholder="USD" value={this.state.numMoney} onChange={e => this.handleChange2(e)}/>
>>>>>>> master
                    </InputGroup>

                    <Button variant="light">
                      {this.state.display_data['FROMSYMBOL']}
                      <Badge variant="light">{this.state.output2}</Badge>
                    </Button>
                  </Form>

                </Card.Body>
              </Card>
            </Col>
            <div className = "pt-2">

            <Col>
              {
                this.state.about.map((info, i) => {
                  return (<Accordion>
                    <Card style={{
                        width: '22rem'
                      }}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Description
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">

                        <Card.Body>
                            {info.description != null && info.description}
                            <p>{"\n"}</p>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                              <i class="fas fa-chevron-up"></i>
                            </Accordion.Toggle>
                        </Card.Body>

                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          Links
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <a href={info.website_url != null && info.website_url}>
                            <i class="fas fa-globe"></i>
                            {"\n"}Website
                          </a>
                          <p>{"\n"}</p>
                          <a href={info.whitepaper_url != null && info.whitepaper_url}>
                            <i class="far fa-file-alt"></i>
                            {"\n"}Whitepaper
                          </a>
                          <p>{"\n"}</p>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">

                            <i class="fas fa-chevron-up"></i>
                          </Accordion.Toggle>

                        </Card.Body>

                      </Accordion.Collapse>
                    </Card>
                  </Accordion>);
                })
              }
            </Col>
            </div>
          </div>




            <Col className="ml-auto p-2">
              <News name={this.state.currencyname}/>
            </Col>


        </Row>

<<<<<<< HEAD

=======
        <Col className="p-2">
          <News name={this.state.currencyname}/>
        </Col>
>>>>>>> master

      </Container>



      <FooterPage/>

    </div>);
  }
}

export default Cryptocurrency;
