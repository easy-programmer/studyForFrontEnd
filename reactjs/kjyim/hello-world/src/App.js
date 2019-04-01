import React, { Component } from 'react';
import ThumbGalleryList from './ThumbGallery/ThumbGalleryList';
import axios from 'axios';
import './ThumbGallery/ThumbGallery.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: 'img1',
      imgList: [],
      error: false
    }
  }
  
  // 에러 발생시 잡아주는 메서드. 항상 부모에게 정의해야함
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    // API를 통해서 서버로 오류 내용 날리기
  }

  componentDidMount = () => {
    this.getImgUrlList();
  }

  // 데이터 가져오기
  getImgUrlList = () => {
    const apiUrl = 'dummy/ThumbGalleryDb.json';

    axios.get(apiUrl).then(data => {
        this.setState({
            imgList: data.data.imgList
        });
        console.log(this.state.imgList);
    }).catch(error => {
        console.log(error);
    });
      
  }
  handleClick = (id) => {
    this.setState({
      id: id
    });
    console.log(id);
  }

  changeList = () => {
    let obj = document.getElementsByClassName('imgs');
    obj[0].className = 'list';
  }

  render() {
    if(this.state.error) {
      return (
        <div>에러가 났어여!</div>
      )
    }
    
    return (
        <div className="container">
             <div className="main-img">
                <ThumbGalleryList data = {
                  this.state.imgList.filter(info => (
                    info.id === this.state.id
                  ))}
                />
            </div>
            <div className="imgs">
              <ThumbGalleryList
                data = { this.state.imgList }
                imgClick = {this.handleClick}
              />
            </div>
            <button onClick={this.changeList} >list</button>
         </div>
         
    );
  }
}

export default App;
