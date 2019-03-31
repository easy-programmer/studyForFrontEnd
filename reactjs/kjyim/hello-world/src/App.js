import React, { Component } from 'react';
import ThumbGalleryList from './ThumbGallery/ThumbGalleryList';
import axios from 'axios';
import './ThumbGallery/ThumbGallery.css';

class App extends Component {
  id = 0;
  constructor(props){
    super(props);

    this.state = {
      id: 'img1',
      currenImgUrl: '',
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
        
    }).catch(error => {
        console.log(error);
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
                 {
                  this.state.currenImgUrl === ''? (
                    <ThumbGalleryList list = {
                      this.state.imgList.filter(imgInfo => (
                        imgInfo.id === this.state.id
                      ))
                    }/>
                  ) : (
                    <span>LOADING...</span>
                  )
                }
            </div>
            <div className="imgs">
              {
                  this.state.currenImgUrl === ''? (
                    <ThumbGalleryList list = {
                      this.state.imgList
                    }/>
                  ) : (
                    <span>LOADING...</span>
                  )
                }  
             </div>
         </div>
    );
  }
}

export default App;
