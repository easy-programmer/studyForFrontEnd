import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';



class Counter extends Component {
    state = {
        number: 0 
    }
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }
    render(){
        return(
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </div>
        );
    }
}

export default Counter;