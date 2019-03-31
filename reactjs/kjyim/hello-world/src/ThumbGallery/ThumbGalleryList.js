import React, { Component, Fragment } from 'react';


const ThumbGalleryList = (props) => {
    
    return (
        <Fragment>
            {
                props.list.map((img, index) => (
                    <img src={img.imgUrl} id={img.id} />
                ))
            }
        </Fragment>
    );
   
}

export default ThumbGalleryList;