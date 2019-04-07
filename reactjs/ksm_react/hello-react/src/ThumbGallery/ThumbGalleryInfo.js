import React, { Component, Fragment } from 'react';


class ThumbGalleryInfo extends Component {
    
    handleClick = () => {
        const { info, imgClick } = this.props;
        console.log(info);
        imgClick(info.id);
    }
    
    render() {
        const { id, imgUrl } = this.props.info;

        return (
            <Fragment>
                <img src={imgUrl} id={id} onClick={this.handleClick} alt='' />
            </Fragment>
        );
    }
}


export default ThumbGalleryInfo;