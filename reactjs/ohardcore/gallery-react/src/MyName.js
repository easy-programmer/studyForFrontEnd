import React, {Component} from 'react';

class MyName extends Component{
    static defaultProps ={
        name: "default"
    }
    render(){
        return(
            <div>
                Hello there, My name is <b>{this.props.name}</b>.
            </div>
        )
    }
}


export default MyName;