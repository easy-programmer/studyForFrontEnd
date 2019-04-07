import React, { Component } from 'react';
import ThumbGalleryList from './ThumbGallery/ThumbGalleryList';
// import axios from 'axios';
import './ThumbGallery/ThumbGallery.css';

class Gallery extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: 'img1',
      imgList: [],
      error: false,
      showPattern: 'imgs'
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
    const imgListInfo = [
      {
        id: 'img1',
        imgUrl: '/img/img1.jpg'
      },
      {
        id: 'img2',
        imgUrl: '/img/img2.jpg',
      },
      {
        id: 'img3',
        imgUrl: '/img/img3.jpg',
      },
      {
        id: 'img4',
        imgUrl: '/img/img4.jpg',
      },
      {
        id: 'img5',
        imgUrl: '/img/img5.jpg',
      },
      {
        id: 'img6',
        imgUrl: '/img/img6.jpg',
      },
      {
        id: 'img7',
        imgUrl: '/img/img7.jpg',
      },
      {
        id: 'img8',
        imgUrl: '/img/img8.jpg',
      }
    ];


    this.setState({
        imgList: imgListInfo
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
    this.setState({
      showPattern : 'list'
    });
  }

  changeGrid = () => {
    let obj = document.getElementsByClassName('list');
    obj[0].className = 'imgs';
    this.setState({
      showPattern : 'imgs'
    });
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
            <div>
              {
              this.state.showPattern === 'imgs' 
                ? <button onClick={this.changeList} >list</button>
                : <button onClick={this.changeGrid} >Grid</button>
              }
            </div>
         </div>
    );
  }
}

export default Gallery;