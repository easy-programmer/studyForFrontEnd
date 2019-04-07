import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    foo : {
      bar: 0,
      foobar: 1
    },
    action : 'default'
  }


  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
      foo: {
        ...this.state.foo,
        bar: this.state.foo.bar+1,
        foobar: this.state.foo.foobar+1
      },
      action : 'Plus'
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
      foo: {
        ...this.state.foo,
        bar: this.state.foo.bar-1,
        foobar: this.state.foo.foobar-1
      },
      action : 'Minus'
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>Action: {this.state.action}</div>
        <div>값: {this.state.number}</div>
        <div>foo_bar: {this.state.foo.bar}</div>
        <div>foo_foobar: {this.state.foo.foobar}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;