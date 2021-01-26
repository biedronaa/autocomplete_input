import React, { Component } from 'react';

class List extends Component {

    render(){
    const usernames = this.props.usernames.map((user) => {
        if(this.props.term !== ""){
        if(user.username.toLowerCase().includes(this.props.term)){
        return(
            <div className="list" 
            onClick={() => this.props.callFromParent(user.username)}>
                {user.username}
            </div>
        ) 
        }
    }
    return null;
    });
    return <div>{usernames}</div>
    }
}

export default List;
