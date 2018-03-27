import React, { Component } from 'react';
import './App.css';
import './child_component'
import ParentComponent from "./parent_component";
import ChildComponent from "./child_component";

class App extends Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            name: ""
        }
    }

    onUpdate(e){
        this.setState({
            name: e
        })
    };

  render() {
    return (
        <div>
            <ParentComponent passValue={this.onUpdate} value={this.state.name} />

            <ChildComponent value={this.state.name} passValue={this.onUpdate} />
        </div>
    );
  }
}

export default App;
