import React, { Component } from 'react';
import UserList from "./presenter";


class Container extends Component{
    state = {
        Loading: true
    };
    render(){
        return <UserList {...this.props} {...this.state} />;
    }
}


exprot default Container;