import React, { Component, Fragment } from 'react';


class Thumbnail extends Component {
    state = {
        imgUrl: ''
    }
    imageClick = (e) => {
        this.setState({
            imgUrl: e.target.src 
        })
    }
    
    render() {
        const { id, imgUrl } = this.props.info;
        
        return (
            <Fragment>
                <img src={imgUrl} id={id} onClick={this.imageClick} />
            </Fragment>
        );
    }
}

export default Thumbnail;