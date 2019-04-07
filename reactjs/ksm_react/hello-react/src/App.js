import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';
import PhoneForm from './PhoneBook';
import PhoneInfoList from './PhoneInfoList';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render() {
    const name = 'React';
    const value = 1;
    return (
      <Fragment>
        <PhoneForm
          onCreate={this.handleCreate} 
        />
        <PhoneInfoList data={this.state.information}/>

        <MyName name="김성모" />

        <MyName/>

        <Counter/>

        <div className="App">
          {/* 주석은 이렇게 */}
          {name} CSS 테스트
        </div>
        <div>
          {
            1 + 1 === 2 
              ? (<div>맞아요!</div>)
              : (<div>틀려요!</div>)
          }
        </div>
        <div>
          {
            1 + 1 === 2 && (<div>맞아요!</div>)
          }
        </div>
        <div>
          {
            (function() {
              if (value === 1) return (<div>하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()
          }
        </div>
      </Fragment>
    );
  }
}

export default App;
