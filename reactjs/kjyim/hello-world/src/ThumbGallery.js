import React, { Component } from 'react';
import './ThumbGallery.css';

class Thumbnail extends Component {
    state = {
        imgUrl : 'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?cs=srgb&dl=abstract-architectural-design-architecture-316093.jpg&fm=jpg'
    }
    
    imageClick = () => {
        this.state.imgUrl = "";
    }
    
    render() {
        return (
            <div className="container">
                <div className="main-img">
                    <img src={this.state.imgUrl} id="current" onclick="imageClick()" />
                </div>
                <div className="imgs">
                    <img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <img src="https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <img src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <img src="https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <img src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <img src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <img src="https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
            </div>
        );
    }
}

export default Thumbnail;