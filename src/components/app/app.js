import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, BookPage, HousePage, BooksItem } from '../pages';
import GotService from '../../service/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css'

export default class App extends Component {
  gotService = new GotService()
  
  state = {
    showRandom: true,
    error: false
  }

  componentDidCatch() {
    console.log('error')
    this.setState({ error: true })
  }

  onToggleRandom = () => {
    this.setState(({ showRandom }) => ({
      showRandom: !showRandom
    }))
  }


  render() {
    const { showRandom } = this.state
    const char = showRandom ? <RandomChar /> : null

    if (this.state.error) {
      return <ErrorMessage />
    }

    return (
      <Router>
        <div className='app'>
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
            <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>} />
            <Route path='/characters' component={CharacterPage} />
            <Route path='/houses' component={HousePage} />
            <Route path='/books' exact component={BookPage} />
            <Route path='/books/:id' render={
              ({ match }) => {
                const { id } = match.params
                return <BooksItem bookId={id} />
              }
            } />
          </Container>
        </div>
      </Router>
    );
  }
};

