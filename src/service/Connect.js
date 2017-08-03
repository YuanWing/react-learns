import React, { Component } from 'react';
import axios from 'axios';


const Connect = (MyComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      axios.get('http://rapapi.org/mockjsdata/23242/v1/question/page')
        .then(res => res.data)
        .then(data => {
          this.setState({
            data: data.data.recordList
          });
        })
      
    }

    render() {
      return <MyComponent { ...this.props } data={this.state.data} />
    }
  }
}

export {
  Connect,
}