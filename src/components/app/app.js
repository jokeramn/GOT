import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



export default class App extends Component {

  state = {
    showRandom: true,
    selectedChar: 130
  }

  onToggleRandom = () => {
    this.setState(({ showRandom }) => ({
      showRandom: !showRandom
    }))
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    const { showRandom } = this.state
    const char = showRandom ? <RandomChar /> : null
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {char}
              <button
                className='mb-5 p-2 btn-outline-dark'
                onClick={this.onToggleRandom}>
                toggleRandom</button>
            </Col>
          </Row>

          <Row>
            <Col md='6'>
              <ItemList onCharSelected={this.onCharSelected} />
            </Col>
            <Col md='6'>
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

