import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeUserName} from '../store/action/action';
class Practice extends Component {

    constructor(){
        super()
        
    }
  

    render() {
        return (
            <div>
                <input type='text' value={} />
                <h1>Hello World{this.props.userName}</h1>
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch){
    return({
        changeUserName: ()=>{dispatch(changeUserName())}
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Practice);

