import React, { Component } from 'react';
import './App.css';
import './App'

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            name: ""
        }
    }

    update(e) {
        this.setState({
            name: e.target.value

        })
        if (!!this.props.passValue){
            this.props.passValue(e.target.value);
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter Here" onChange={this.update} value={this.props.value} />
            </div>
        );
    }
}

export default ChildComponent;
