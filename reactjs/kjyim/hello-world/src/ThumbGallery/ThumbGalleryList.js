import React, { Fragment, Component } from 'react';
import ThumbGalleryInfo from './ThumbGalleryInfo';


class ThumbGalleryList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data, imgClick } = this.props;
        
        const list = data.map(
            info => (
                <ThumbGalleryInfo
                    imgClick={imgClick}
                    info={info}
                    key={info.id}
                />
            )
        );
          
        return (
            <Fragment>
                {list}
            </Fragment>
        );
    }
   
}

export default ThumbGalleryList;