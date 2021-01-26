import React, {Component} from 'react';
import axios from 'axios';
import List from './List';
import './style.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        users: [ ],
        term: ""
    } 
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    this.setState({term: event.target.value});
    event.preventDefault();
    }

    usernameClick = (choosen) => {
    this.setState({term: choosen});
    }

    componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
        this.setState({
        users: res.data
        })
    })
    }

    render(){
    const { users } = this.state;
    const { term } = this.state;
        return (
        <div className="App">
        <input type="text" value={term} id="username" placeholder="username" onChange={this.handleChange}/>
        <List usernames = {users} term = {term} callFromParent={this.usernameClick.bind(this)}/>
        </div>
    );
    }
}

export default App;
